import { Response } from 'express'

export const buildResMock = () => {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  } as unknown as Response
}
