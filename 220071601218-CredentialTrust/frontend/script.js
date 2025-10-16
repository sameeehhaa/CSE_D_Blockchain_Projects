const baseUrl = "http://localhost:4000";

async function registerIssuer() {
  const name = document.getElementById("issuerName").value;
  const res = await fetch(`${baseUrl}/register-issuer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  const data = await res.json();
  document.getElementById("issuerResult").textContent = JSON.stringify(data, null, 2);
}

async function issueCredential() {
  const holder = document.getElementById("holderName").value;
  const issuer = document.getElementById("issuerId").value;
  const res = await fetch(`${baseUrl}/issue-credential`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ holder, issuer })
  });
  const data = await res.json();
  document.getElementById("issueResult").textContent = JSON.stringify(data, null, 2);
}

async function verifyCredential() {
  const credId = document.getElementById("credIdVerify").value;
  const res = await fetch(`${baseUrl}/verify-credential`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ credentialId: credId })
  });
  const data = await res.json();
  document.getElementById("verifyResult").textContent = JSON.stringify(data, null, 2);
}

async function revokeCredential() {
  const credId = document.getElementById("credIdRevoke").value;
  const res = await fetch(`${baseUrl}/revoke-credential`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ credentialId: credId })
  });
  const data = await res.json();
  document.getElementById("revokeResult").textContent = JSON.stringify(data, null, 2);
}
