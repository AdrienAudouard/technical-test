import { formatAmount, formatPercent } from 'helpers/format'
import React from 'react'
import { HotelSummaryAvailability } from 'types/hotel'
import './Availability.scss'

interface Props {
  availability: HotelSummaryAvailability
}

export const Availability = ({ availability }: Props) => {
  const formattedDiscountPrice = formatAmount(availability.discountPrice)
  const formattedPrice = formatAmount(availability.price)
  const formattedDiscountPercent = formatPercent(availability.discountRate)

  return (
    <p
      className={`availability ${availability.isLastSale ? '' : 'availability--past'}`}
    >
      <span className='availability__discount-price'>
        {formattedDiscountPrice}
      </span>
      <s className='availability__price'>{formattedPrice}</s>
      <span className='availability__discount-percent'>
        -{formattedDiscountPercent}
      </span>
    </p>
  )
}
