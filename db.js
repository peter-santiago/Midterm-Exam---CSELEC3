// db.js - PostgreSQL connection utility
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'student_directory',
  password: process.env.PGPASSWORD || 'password',
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
  ssl: { rejectUnauthorized: false },
});

export default pool;