import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = req.headers["authorization"] as string;
  if (apiKey !== process.env.API_KEY!)
    return res.status(401).json({ message: "Unauthorized" });
}
