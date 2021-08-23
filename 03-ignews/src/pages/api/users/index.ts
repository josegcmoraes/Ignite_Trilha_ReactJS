import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'not found' },
        { id: 2, name: 'Laís' },
        { id: 3, name: 'Ana Carolina' },
        { id: 4, name: 'Jose' },
        { id: 5, name: 'Joice' },

    ]
    return response.json(users);
}