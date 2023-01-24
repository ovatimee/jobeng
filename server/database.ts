import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool();
}

export { conn };
