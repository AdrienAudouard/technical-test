import { Router } from 'express'
import { getHotels } from '../services/hotelService'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const hotels = await getHotels()
    res.json(hotels)
  } catch(err) {
    next(err)
  }
})

export default router
