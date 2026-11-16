import { HotelSummary } from 'types/hotel'

export const hotelSummary: HotelSummary = {
  id: 28,
  name: 'Eiffel Blomet',
  preview: 'Accès piscine + hammam + sauna + petit dej inclus',
  pictureId:
    'https://staycation.twic.pics/v1/cover=1000x-/image:pictures/production/cb4c7f5b7157408a33fcd1ac946f0d4a.jpg',
  stars: 4,
  reviews: {
    count: 10,
    score: 7.8
  },
  availability: {
    discountPrice: 100,
    price: 200,
    discountRate: 0.5,
    isLastSale: true
  }
}

export const hotelSummaryWithoutAvailability: HotelSummary = {
  ...hotelSummary,
  availability: null
}

export const hotelSummaryWithoutReviews: HotelSummary = {
  ...hotelSummary,
  reviews: null
}
