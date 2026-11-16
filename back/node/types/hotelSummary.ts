export interface HotelSummary {
  id: number
  name: string
  stars: number
  preview: string
  pictureId: string
  reviews: HotelSummaryReviews | null
  availability: HotelSummaryAvailability | null
}

export interface HotelSummaryReviews {
  count: number
  score: number
}

export interface HotelSummaryAvailability {
  price: number
  discountPrice: number
  discountRate: number
  isLastSale: boolean
}
