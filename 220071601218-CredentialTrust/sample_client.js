import fetch from 'node-fetch';
const base = 'http://localhost:4000';

async function demo() {
  console.log('1) Register issuer');
  let r = await fetch(`${base}/api/issuer/register`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ name: 'Acme Internships Pvt Ltd' })
  });
  const issuer = await r.json();
  console.log('issuer:', issuer);

  console.log('\n2) Issue internship credential');
  r = await fetch(`${base}/api/credential/issue`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      issuer_did: issuer.did,
      holder: 'did:example:student123',
      type: ['VerifiableCredential','InternshipCertificate'],
      data: { role: 'Frontend Intern', company: 'Acme', startDate: '2025-06-01', endDate: '2025-08-31', remarks: 'Completed project X' }
    })
  });
  const issued = await r.json();
  console.log('issued:', { credentialId: issued.credentialId });

  console.log('\n3) Verify credential');
  r = await fetch(`${base}/api/credential/verify`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ jwt: issued.jwt }) });
  const verification = await r.json();
  console.log('verification:', verification.verified ? 'OK' : verification);

  console.log('\n4) Revoke credential');
  r = await fetch(`${base}/api/credential/revoke`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ credentialId: issued.credentialId }) });
  const rev = await r.json();
  console.log('revoked:', rev);

  console.log('\n5) Verify after revoke (should fail)');
  r = await fetch(`${base}/api/credential/verify`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ jwt: issued.jwt }) });
  const verification2 = await r.json();
  console.log('verification after revoke:', verification2);
}

demo().catch(e => console.error(e));
