import {Pool} from 'pg'
import 'dotenv/config'


const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("connect", () => {
  console.log("Connected to Neon PostgreSQL");
});

pool.on("error", (err) => {
  console.error("PostgreSQL error:", err);
});

export default pool