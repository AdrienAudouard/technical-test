export interface Hotel {
  id: number
  name: string
  stars: number
  preview: string
  pictureId: string
  reviews: HotelReviews
}

export interface HotelReviews {
  count: number
  score: number | null
}
