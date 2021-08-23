import { NextApiRequest, NextApiResponse } from "next";


export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {

    } else {
        response.setHeader('Allow', 'POST')
        response.status(405).end('method not allowed');
    }
}