import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import comments from '@db/comment'

/**
 * Controller to mock CRUD of comments
 *
 * Mock `POST` operation to add a comment to certain post.
 *
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const { postId, comment } = JSON.parse(req.body)

    comments.push({ id: comments.length.toString(), postId, content: comment })

    await fs.writeFileSync('db/comment.json', JSON.stringify(comments))
    res.status(200).json({ code: 'SUCCESS' })
  }
}
