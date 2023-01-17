import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === "GET") {
    try {
      const query = "SELECT jobs.*, types.name as type, categories.name as category FROM jobs LEFT JOIN types ON jobs.type_id = types.id LEFT JOIN categories ON jobs.category_id = categories.id;";
      const response = await conn.query(query);
      return res.json(response.rows);
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
