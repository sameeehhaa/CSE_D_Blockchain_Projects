import Database from 'better-sqlite3';

const db = new Database('credential_trust.db');

// Table for issuers
db.prepare(`CREATE TABLE IF NOT EXISTS issuers (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE,
  did TEXT UNIQUE,
  public_jwk TEXT,
  private_jwk TEXT,
  created_at TEXT
)`).run();

// Table for credentials
db.prepare(`CREATE TABLE IF NOT EXISTS credentials (
  id INTEGER PRIMARY KEY,
  credential_id TEXT UNIQUE,
  holder TEXT,
  issuer_did TEXT,
  vc_jwt TEXT,
  issued_at TEXT,
  revoked INTEGER DEFAULT 0
)`).run();

export default db;

