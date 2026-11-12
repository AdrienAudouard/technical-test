import React from 'react'
import { HotelSummaryReviews } from 'types/hotel'
import './Reviews.scss'

interface Props {
  reviews: HotelSummaryReviews
}
export const Reviews = ({ reviews }: Props) => {
  const shouldDisplayReviews = reviews.count > 0 && reviews.score !== null

  if (!shouldDisplayReviews) {
    return null
  }

  return (
    <span className='reviews'>
      {reviews.score!.toFixed(1)}&nbsp;({reviews.count})
    </span>
  )
}
