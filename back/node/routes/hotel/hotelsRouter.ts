import { Router } from 'express'
import { getHotels } from '../../services/hotel/hotelService'

export const hotelsRouter = Router()

hotelsRouter.get('/', async (req, res, next) => {
  try {
    const hotels = await getHotels()
    res.json(hotels)
  } catch (err) {
    next(err)
  }
})
