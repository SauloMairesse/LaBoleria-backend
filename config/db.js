//SQL
import pg from "pg"; //SQL
import dotenv from "dotenv"; //SQL
dotenv.config();

const {Pool} = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default db;