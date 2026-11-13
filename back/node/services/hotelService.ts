import { findAllHotels, HotelSummaryRow } from '../repositories/hotelRepository'
import { HotelSummary } from '../types/hotel-summary'

const computeDiscountRate = (discountPrice: number, price: number) =>
  1 - discountPrice / price

const toAvailability = (row: HotelSummaryRow) => {
  if (
    row.price == null ||
    row.discount_price == null ||
    row.is_last_sale == null
  ) {
    return null
  }

  return {
    price: row.price,
    discountPrice: row.discount_price,
    discountRate: computeDiscountRate(row.discount_price, row.price),
    isLastSale: row.is_last_sale
  }
}

const toHotelSummary = (row: HotelSummaryRow): HotelSummary => {
  return {
    id: row.id,
    name: row.name,
    stars: row.stars,
    preview: row.preview,
    pictureId: row.picture_id,
    reviews: {
      count: row.review_count,
      score: row.review_score
    },
    availability: toAvailability(row)
  }
}

export const getHotels = async () => {
  const rows = await findAllHotels()
  return rows.map(toHotelSummary)
}
