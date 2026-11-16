import { buildResMock } from '../tests/mock/expressMock'
import { HttpError } from '../types/httpError'
import { errorMiddleware } from './errorMiddleware'

describe('errorMiddleware', () => {
  const req = {} as any
  const next = jest.fn()

  it('should respond with the info of the HttpError', () => {
    const res = buildResMock()

    errorMiddleware(new HttpError(400, 'Bad request'), req, res, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ message: 'Bad request' })
  })

  it('should respond with an http error 500 when the error is not a HttpError', () => {
    const res = buildResMock()

    errorMiddleware(new Error('not http error'), req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal error' })
  })
})
