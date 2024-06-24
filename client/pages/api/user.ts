'use server'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Loggin } from '../lib/auth';
import { getOrders } from '../lib/user';

type Data = {
  orders: any;
  req: any;
};

export default async function GET(req: NextApiRequest, res: NextApiResponse<Data | {error:string}>) {
  try {

return res.status(200).json({
    orders:null, req:''
})
//     const response = await fetch('http://localhost:5000/orders', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${req.cookies.get("token")}`,
//   },
// });

// console.log({response:req.cookies})

// if (!response.ok) {
//   console.error('Error fetching orders. Status:', response.status);
//   return res.status(response.status).json({ error: 'Error fetching orders' });
// }

// const orders = await response.json();




  } catch (error: any) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
