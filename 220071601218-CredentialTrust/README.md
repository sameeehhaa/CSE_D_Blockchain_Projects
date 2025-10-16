# Credential Trust: A Blockchain-Based Ecosystem for Verifiable Internships and Job Offers

## TEAM MEMBERS: 
- Sameeha Mohamed Basheer Mohideen - 220071601218
- Sarifa Shifana - 220071601225
- Shahma Khadeeja - 220071601230
- Sherin Bharathi - 220071601238
- Sumerah Shernaz - 220071601255

## Project Overview
This project is a **blockchain-based system** for creating, verifying, and managing digital credentials for internships and job offers. It allows organizations to issue secure, verifiable certificates that cannot be faked. The system also supports revoking credentials if needed, ensuring trust and transparency.

## Key highlights of the project:
- **Secure and Trustworthy:** Blockchain ensures credentials are immutable, verifiable, and resistant to forgery.  
- **Decentralized Verification:** Anyone with the credential ID can verify its authenticity without relying on a central authority.  
- **Easy Credential Management:** Organizations can issue, revoke, and check the status of credentials in real-time.  
- **Transparency:** Each credential contains a unique identifier and is linked to the issuer’s decentralized ID (DID), ensuring transparency for employers, universities, and other institutions.  
- **Revocation Support:** Credentials can be revoked if issued by mistake or if they expire, ensuring that outdated or incorrect information cannot be misused.  
- **Practical Use Cases:** Ideal for internships, job offers, academic achievements, or professional certifications where verification is critical.  
This system simulates a real-world blockchain-based credential ecosystem, making the process of issuing, verifying, and managing credentials **efficient, transparent, and secure**.

## Workflow
1. **Register Issuer**  
   - Organizations are registered with a **unique decentralized ID (DID)** and a public key, making them recognized as official issuers.

2. **Issue Credential**  
   - Credentials are issued to individuals with a **unique credential ID** linked to the issuer.  
   - This provides digital proof of completion of an internship or a job offer.

3. **Verify Credential**  
   - Credential validity can be checked using its ID.  
   - This ensures that employers, universities, or other parties can confirm authenticity.

4. **Revoke Credential**  
   - Credentials can be deactivated.  
   - Once revoked, the system updates the status to ensure it is no longer trusted.

5. **Check Status**  
   - The current state of the credential (active or revoked) can be verified at any time.

## Output Format
The system provides structured output in **JSON**:

```json
{
  "credentialId": "cred-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "holderName": "John Doe",
  "issuerDID": "did:credtrust:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "status": "active"
}
