// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const city = req.query['q']
  const dt = req.query['dt']
  const end_dt = req.query['end_dt']

  const response = await fetch(
    `http://api.weatherapi.com/v1/history.json?key=${process.env.API_KEY}&q=${city}&dt=${dt}&end_dt=${end_dt}`
  )
  const result = await response.json()
  res.json(result)
}
