// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Loggin } from '../lib/auth';

type Data = {
  name: string;
  req: any;
};

export default async function POST(req: NextApiRequest, res: NextApiResponse<Data | {error:string}>) {
  try {
    const token = await Loggin(req.body);

    // Set the token as a cookie with HttpOnly, Secure, and maxAge
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; Max-Age=60 * 60; path=/ `); // Max-Age set to 1 hour (3600 seconds)

    return res.redirect('/dashboard')
  } catch (error: any) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


