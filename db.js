const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000, // ← ADD THIS
  idleTimeoutMillis: 30000,       // ← ADD THIS
});

// Test connection immediately
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Connection error:', err.message);
  } else {
    console.log('✅ Database connected!');
    release();
  }
});

module.exports = pool;