import json
import os
from web3 import Web3  # type: ignore
from solcx import compile_standard, install_solc, set_solc_version  # type: ignore
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Connect to Ganache
GANACHE_URL = os.getenv("WEB3_PROVIDER_URL", "http://127.0.0.1:7545")
w3 = Web3(Web3.HTTPProvider(GANACHE_URL))

# ✅ Handle both Web3 v6 and v7
if hasattr(w3, "is_connected"):
    connected = w3.is_connected()
else:
    connected = w3.isConnected()

if not connected:
    raise Exception("❌ Failed to connect to Ganache! Is it running?")

# Install and set Solidity version
install_solc("0.8.0")
set_solc_version("0.8.0")

# Read contract
with open("MediChain.sol", "r") as file:
    contract_source_code = file.read()

compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"MediChain.sol": {"content": contract_source_code}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    }
)

# Extract ABI and Bytecode
contract_abi = compiled_sol["contracts"]["MediChain.sol"]["MediChain"]["abi"]
contract_bytecode = compiled_sol["contracts"]["MediChain.sol"]["MediChain"]["evm"]["bytecode"]["object"]

# Get deployer account from private key
private_key = os.getenv("PRIVATE_KEY") or "0x54cae190a79d8c3493a45fc5bf3ca6577aeeb43979c2af85a16466f069d330ec"
account = w3.eth.account.from_key(private_key)
deployer_address = account.address

# Check balance
balance = w3.eth.get_balance(deployer_address)
print(f"Deployer ({deployer_address}) balance: {w3.from_wei(balance, 'ether')} ETH")

if balance == 0:
    raise Exception("❌ Deployer account has 0 ETH in Ganache. Fund it first.")

# Create contract instance
MediChain = w3.eth.contract(abi=contract_abi, bytecode=contract_bytecode)

# Build deployment transaction
transaction = MediChain.constructor().build_transaction(
    {
        "from": deployer_address,
        "nonce": w3.eth.get_transaction_count(deployer_address),
        "gas": 6721975,
        "gasPrice": w3.to_wei("20", "gwei"),
    }
)

# Sign with private key
signed_tx = w3.eth.account.sign_transaction(transaction, private_key)

# Send tx
tx_hash = w3.eth.send_raw_transaction(signed_tx.raw_transaction)
print(f"⏳ Deploying contract... tx hash: {tx_hash.hex()}")

# Wait for confirmation
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
print(f"✅ Contract deployed at: {tx_receipt.contractAddress}")

# Save ABI + Bytecode
with open("compiled_contract.json", "w") as f:
    json.dump(compiled_sol, f, indent=4)
print("📂 Compiled contract saved to compiled_contract.json")
