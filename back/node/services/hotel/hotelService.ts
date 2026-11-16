import { findAllHotels } from '../../repositories/hotels/hotelsRepository'
import { toHotelSummary } from './mappers/hotelMapper'

export const getHotels = async () => {
  const rows = await findAllHotels()
  return rows.map(toHotelSummary)
}
