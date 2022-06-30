// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const key = process.env.API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const city = req.query['q'];
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
  const result = await response.json();
  res.json(result);
}
