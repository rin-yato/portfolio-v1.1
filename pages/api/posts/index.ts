import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then( (res) => res.json() );
  res.status(200).send(users);
}
