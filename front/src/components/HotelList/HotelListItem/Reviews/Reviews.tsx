import React from 'react'
import { HotelSummaryReviews } from 'types/hotel'
import './Reviews.scss'
import { formatScore } from 'helpers/format'

interface Props {
  reviews: HotelSummaryReviews
}
export const Reviews = ({ reviews }: Props) => {
  const formattedScore = formatScore(reviews.score)
  return (
    <span className='reviews'>
      {formattedScore}&nbsp;({reviews.count})
    </span>
  )
}
