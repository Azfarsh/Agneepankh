const { Pool } = require('pg');
require('dotenv').config();

let pool;

try {
  pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  console.log("PostgreSQL pool created successfully.");
} catch (error) {
  console.error("Failed to create PostgreSQL pool:", error.message);
}

module.exports = pool;