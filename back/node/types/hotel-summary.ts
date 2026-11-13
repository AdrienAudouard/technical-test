export interface HotelSummary {
  id: number
  name: string
  stars: number
  preview: string
  pictureId: string
  reviews: {
    count: number
    score: number | null
  }
  availability: {
    price: number
    discountPrice: number
    discountRate: number
    isLastSale: boolean
  } | null
}
