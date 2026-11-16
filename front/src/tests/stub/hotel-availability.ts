import { HotelSummaryAvailability } from 'types/hotel'

export const availability: HotelSummaryAvailability = {
  price: 200,
  discountPrice: 100,
  discountRate: 0.5,
  isLastSale: true
}

export const availabilityNotLastSale: HotelSummaryAvailability = {
  ...availability,
  isLastSale: false
}
