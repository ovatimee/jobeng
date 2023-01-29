import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user:'jobeng_user',
    host: 'dpg-cf9vkpmn6mpv49fmm4h0-a.oregon-postgres.render.com',
    database: 'jobeng',
    password: 'CvyLdhjKWgtfVARNZU9lvgXM2jzijWob'

  });
}

export { conn };
