import { ErrorRequestHandler } from 'express'
import { HttpError } from '../types/httpError'

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message })
    return
  }

  res.status(500).json({ message: 'Internal error' })
}
