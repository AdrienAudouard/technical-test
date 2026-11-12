export interface HotelSummary {
  id: number
  name: string
  stars: number
  preview: string
  pictureId: string
  reviews: HotelSummaryReviews
  availability: HotelSummaryAvailability | null
}

export interface HotelSummaryReviews {
  count: number
  score: number | null
}

export interface HotelSummaryAvailability {
  price: number
  discountPrice: number
  discountPercent: number
}
