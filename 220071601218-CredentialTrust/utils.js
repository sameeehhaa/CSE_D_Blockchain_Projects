import { generateKeyPair, exportJWK, importJWK, SignJWT, jwtVerify } from 'jose';

export async function createEd25519KeyPair() {
  const { publicKey, privateKey } = await generateKeyPair('EdDSA');
  const pubJwk = await exportJWK(publicKey);
  const privJwk = await exportJWK(privateKey);
  return { pubJwk, privJwk };
}

export function makeDidKeyFromPubJwk(pubJwk) {
  return `did:ct:${Buffer.from(JSON.stringify(pubJwk)).toString('base64').slice(0,12)}`;
}

export async function signVCAsJWT(vcPayload, issuerPrivJwk) {
  const privateKey = await importJWK(issuerPrivJwk, 'EdDSA');
  const jwt = await new SignJWT(vcPayload)
    .setProtectedHeader({ alg: 'EdDSA' })
    .setIssuedAt()
    .sign(privateKey);
  return jwt;
}

export async function verifyVCJwt(vcJwt, issuerPubJwk) {
  const publicKey = await importJWK(issuerPubJwk, 'EdDSA');
  const { payload } = await jwtVerify(vcJwt, publicKey);
  return payload;
}

