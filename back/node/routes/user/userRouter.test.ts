import express from 'express'
import request from 'supertest'
import { getUser } from '../../services/user/userService'
import { HttpError } from '../../types/httpError'
import { errorMiddleware } from '../../middlewares/errorMiddleware'
import { usersRouter } from './userRouter'

jest.mock('../../services/user/userService', () => {
  return {
    getUser: jest.fn()
  }
})

const getUserMock = jest.mocked(getUser)

describe('userRouter', () => {
  const app = express()
  app.use('/users', usersRouter)
  app.use(errorMiddleware)

  beforeEach(() => {
    getUserMock.mockReset()
  })

  it('should return the requested user', async () => {
    getUserMock.mockResolvedValue({ id: 1, firstName: 'Adrien' })

    const response = await request(app).get('/users/1')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ id: 1, firstName: 'Adrien' })
  })

  it('should throw a 400 when the user id is not a number', async () => {
    const response = await request(app).get('/users/abc')

    expect(response.status).toBe(400)
    expect(getUserMock).not.toHaveBeenCalled()
  })

  it('should throw a 404 when the user is not found', async () => {
    getUserMock.mockRejectedValue(new HttpError(404, 'Not found'))
    const response = await request(app).get('/users/2')

    expect(response.status).toBe(404)
  })
})
