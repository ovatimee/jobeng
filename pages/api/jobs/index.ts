import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../server/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  if (method === "GET") {
    try {
      const page = parseInt(query.page) || 1;
      const limit = 12;
      const offset = (page - 1) * limit;

      const { rows } = await conn.query(
        `SELECT jobs.*, types.name as type, categories.name as category FROM jobs LEFT JOIN types ON jobs.type_id = types.id LEFT JOIN categories ON jobs.category_id = categories.id LIMIT ${limit} OFFSET ${offset};`
      );
      return res.status(200).json(rows);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
