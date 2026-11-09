import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err) => {
    console.error("Unexpected database error:", err);
});

export default pool;
