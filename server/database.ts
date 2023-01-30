import { Pool } from "pg";
const connectionString = process.env.PGSTRING;

let conn: any;
if (!conn) {
  conn = new Pool({ connectionString, ssl: true });
}

export { conn };
