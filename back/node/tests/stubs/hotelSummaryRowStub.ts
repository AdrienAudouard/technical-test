import { HotelSummaryRow } from '../../repositories/hotels/hotelsRepository'

export const hotelSummaryRow: HotelSummaryRow = {
  id: 28,
  name: 'Eiffel Blomet',
  stars: 4,
  preview: 'Accès piscine + hammam + sauna + petit dej inclus',
  picture_id:
    'https://staycation.twic.pics/v1/cover=1000x-/image:pictures/production/cb4c7f5b7157408a33fcd1ac946f0d4a.jpg',
  review_count: 10,
  review_score: 5.5,
  discount_price: 100,
  price: 200,
  is_last_sale: true
}

export const hotelSummaryRowWithoutAvailability: HotelSummaryRow = {
  ...hotelSummaryRow,
  price: null,
  discount_price: null,
  is_last_sale: null
}

export const hotelSummaryRowWithoutReview: HotelSummaryRow = {
  ...hotelSummaryRow,
  review_score: null
}
