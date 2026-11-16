import {
  hotelSummaryRow,
  hotelSummaryRowWithoutAvailability,
  hotelSummaryRowWithoutReview
} from '../../../tests/stubs/hotelSummaryRowStub'
import { HotelSummary } from '../../../types/hotelSummary'
import { toHotelSummary } from './hotelMapper'

describe('toHotelSummary', () => {
  it('should map to an HotelSummary', () => {
    const result = toHotelSummary(hotelSummaryRow)
    const expected: HotelSummary = {
      id: 28,
      name: 'Eiffel Blomet',
      preview: 'Accès piscine + hammam + sauna + petit dej inclus',
      pictureId:
        'https://staycation.twic.pics/v1/cover=1000x-/image:pictures/production/cb4c7f5b7157408a33fcd1ac946f0d4a.jpg',
      stars: 4,
      reviews: {
        count: 10,
        score: 5.5
      },
      availability: {
        discountPrice: 100,
        price: 200,
        discountRate: 0.5,
        isLastSale: true
      }
    }
    expect(result).toEqual(expected)
  })

  it('should return no availability when the hotel has no opening', () => {
    const result = toHotelSummary(hotelSummaryRowWithoutAvailability)

    expect(result.availability).toBeNull()
  })

  it('should return no review when the hotel has no review', () => {
    const result = toHotelSummary(hotelSummaryRowWithoutReview)

    expect(result.reviews).toBeNull()
  })
})
