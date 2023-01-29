import { Pool } from "pg";

let conn: any;
const connectionString: string =
  "postgres://jobeng_user:CvyLdhjKWgtfVARNZU9lvgXM2jzijWob@dpg-cf9vkpmn6mpv49fmm4h0-a.oregon-postgres.render.com/jobeng";
if (!conn) {
  conn = new Pool({ connectionString, ssl: true });
}

export { conn };
