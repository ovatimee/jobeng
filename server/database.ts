import { Pool } from "pg";
const connectionString = process.env.PGSTRING;

let production = false

let conn: any;
if (!conn) {
  conn = new Pool({ connectionString, ssl: process.env.NODE_ENV == "production"? true : false });
}

export { conn };
