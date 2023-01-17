import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query: {id} } = req;

  if (method == "GET") {
    try {
      
    } catch (error: any) {
      res.status(400).json({message: error.message})
      
    }
  }
}
