import {NextApiRequest, NextApiResponse} from "next"
import {conn} from "../../server/database";

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const {method, query, body} = req

  try {
    const {rows}  = await conn.query("SELECT * FROM categories")
    return res.status(200).json(rows);
  } catch (error: unknown) {
    res.status(400).json({message: error.message})
  }

}
