import { NextApiRequest, NextApiResponse } from 'next';

// Currently disabled - implement when Spotify integration is active
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'Top tracks endpoint disabled' });
}
