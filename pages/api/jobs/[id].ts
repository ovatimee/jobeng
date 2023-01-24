import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../server/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body,
    query: { id },
  } = req;

  if (method == "GET") {
    try {
      const query = "SELECT * FROM jobs WHERE id = $1";
      let value = [id];
      const result = await conn.query(query, value);
      
      if(result.rowCount === 0) {
        return res.status(404).json({message: "Job not found"})
      }
      return res.json(result.rows[0])

    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
