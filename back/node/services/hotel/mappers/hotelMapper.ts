import { HotelSummaryRow } from '../../../repositories/hotels/hotelsRepository'
import {
  HotelSummary,
  HotelSummaryAvailability,
  HotelSummaryReviews
} from '../../../types/hotelSummary'

const computeDiscountRate = (discountPrice: number, price: number) =>
  1 - discountPrice / price

const toHotelReviews = (row: HotelSummaryRow): HotelSummaryReviews | null => {
  if (row.review_score == null) {
    return null
  }

  return {
    count: row.review_count,
    score: row.review_score
  }
}

const toAvailability = (
  row: HotelSummaryRow
): HotelSummaryAvailability | null => {
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

export const toHotelSummary = (row: HotelSummaryRow): HotelSummary => {
  return {
    id: row.id,
    name: row.name,
    stars: row.stars,
    preview: row.preview,
    pictureId: row.picture_id,
    reviews: toHotelReviews(row),
    availability: toAvailability(row)
  }
}
