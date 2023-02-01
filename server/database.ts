import { Pool } from "pg";
const connectionString = process.env.PGSTRING;

let production = false

let conn: any;
if (!conn) {
  conn = new Pool({ connectionString, ssl: production? true : false });
}

export { conn };
