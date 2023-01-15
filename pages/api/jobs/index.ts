import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if(method === "GET") {
    try {
      
    const query =  "SELECT * FROM jobs;"
    const response = await conn.query(query)
    return res.json(response.rows)
    } catch (error: any) {
    return res.status(400).json({message: error.message})  
    }
  }
}
