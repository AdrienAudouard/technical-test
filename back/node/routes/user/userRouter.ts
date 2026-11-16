import { Router } from 'express'
import { getUser } from '../../services/user/userService'
import { HttpError } from '../../types/httpError'

export const usersRouter = Router()

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const userId = Number(req.params.id)

    if (!Number.isInteger(userId)) {
      throw new HttpError(400, 'User id must be an integer')
    }

    const user = await getUser(userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})
