import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query.id;
    // console.log(id)

    const users = [
        { id: 1, name: 'Diego' },
        { id: 2, name: 'Ana' },
        { id: 3, name: 'Rafaella' },
        { id: 4, name: 'Jose' },

    ]
    return response.json(users);
}