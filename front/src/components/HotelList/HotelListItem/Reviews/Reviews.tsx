import React from 'react'
import { HotelReviews } from 'types/hotel'
import './Reviews.scss'

interface Props {
  reviews: HotelReviews
}
export const Reviews = ({ reviews }: Props) => {
  const shouldDisplayRating = reviews.count > 0 && reviews.score !== null

  if (!shouldDisplayRating) {
    return null
  }

  return (
    <span className='reviews'>
      {reviews.score!.toFixed(1)}&nbsp;({reviews.count})
    </span>
  )
}
