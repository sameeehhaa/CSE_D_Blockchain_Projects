// server.js
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// In-memory storage for simplicity
const issuers = {};
const credentials = {};

// Register issuer
app.post("/register-issuer", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Issuer name required" });

  const issuerDID = "did:credtrust:" + uuidv4();
  const publicKey = uuidv4().replace(/-/g, "");

  issuers[issuerDID] = { name, publicKey };
  res.json({ issuerName: name, issuerDID, publicKey });
});

// Issue credential
app.post("/issue-credential", (req, res) => {
  const { holderName, issuerDID } = req.body;
  if (!holderName || !issuerDID)
    return res.status(400).json({ error: "Holder name and issuerDID required" });

  if (!issuers[issuerDID])
    return res.status(400).json({ error: "Issuer not found" });

  const credentialId = "cred-" + uuidv4();
  credentials[credentialId] = { holderName, issuerDID, status: "active" };

  res.json({ credentialId, holderName, issuerDID, status: "active" });
});

// Verify credential
app.post("/verify-credential", (req, res) => {
  const { credentialId } = req.body;
  const cred = credentials[credentialId];
  if (!cred) return res.json({ credentialId, status: "invalid" });

  res.json({ credentialId, status: cred.status === "active" ? "valid" : "revoked" });
});

// Revoke credential
app.post("/revoke-credential", (req, res) => {
  const { credentialId } = req.body;
  const cred = credentials[credentialId];
  if (!cred) return res.status(400).json({ error: "Credential not found" });

  cred.status = "revoked";
  res.json({ credentialId, status: "revoked" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
