import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";


export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1JQMitILJm0pnQrF30Ype2NT', quantity: 1 }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            // success_url: 'https://localhost:3000/posts',
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })
    } else {
        response.setHeader('Allow', 'POST')
        response.status(405).end('method not allowed');
    }
}