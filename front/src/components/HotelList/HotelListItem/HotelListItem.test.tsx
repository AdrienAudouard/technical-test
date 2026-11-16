import { render } from '@testing-library/react'
import { HotelListItem } from './HotelListItem'
import {
  hotelSummary,
  hotelSummaryWithoutAvailability,
  hotelSummaryWithoutReviews
} from 'tests/stub/hotel-summary'
import React from 'react'

describe('HotelListItem', () => {
  it('should display hotel information', () => {
    const { getByText, getByAltText } = render(
      <HotelListItem hotel={hotelSummary}></HotelListItem>
    )

    expect(getByAltText(hotelSummary.name).getAttribute('src')).toBe(
      hotelSummary.pictureId
    )
    expect(getByText(hotelSummary.name)).toBeTruthy()
    expect(getByText('****')).toBeTruthy()
    expect(getByText(hotelSummary.preview)).toBeTruthy()
  })

  it('should display availability when the hotal has an availability', () => {
    const { container } = render(
      <HotelListItem hotel={hotelSummary}></HotelListItem>
    )

    expect(container.querySelector('.availability')).toBeTruthy()
  })

  it('should not display availability when the hotel do not have one', () => {
    const { container } = render(
      <HotelListItem hotel={hotelSummaryWithoutAvailability}></HotelListItem>
    )

    expect(container.querySelector('.availability')).toBeNull()
  })

  it('should display reviews when the hotel has reviews', () => {
    const { container } = render(
      <HotelListItem hotel={hotelSummary}></HotelListItem>
    )

    expect(container.querySelector('.reviews')).toBeTruthy()
  })

  it('should not display reviews when the hotel do not have one', () => {
    const { container } = render(
      <HotelListItem hotel={hotelSummaryWithoutReviews}></HotelListItem>
    )

    expect(container.querySelector('.reviews')).toBeNull()
  })
})
