import { render } from '@testing-library/react'
import { Availability } from './Availability'
import {
  availability,
  availabilityNotLastSale
} from 'tests/stub/hotel-availability'
import React from 'react'

describe('Availability', () => {
  beforeEach(() => {
    const languagesSpy = jest.spyOn(window.navigator, 'language', 'get')
    languagesSpy.mockReturnValue('fr-FR')
  })

  it('should display the discount price, price and discount percent', () => {
    const { container } = render(
      <Availability availability={availability}></Availability>
    )

    expect(
      container.querySelector('.availability__discount-price')?.textContent
    ).toBe('100\xa0€')
    expect(container.querySelector('.availability__price')?.textContent).toBe(
      '200\xa0€'
    )
    expect(
      container.querySelector('.availability__discount-percent')?.textContent
    ).toBe('-50\xa0%')
  })

  it('should not display the availability in grey when its the last sale', () => {
    const { container } = render(
      <Availability availability={availability}></Availability>
    )

    expect(container.querySelector('.availability--past')).toBeNull()
  })

  it('should display the availability in grey when its not the last sale', () => {
    const { container } = render(
      <Availability availability={availabilityNotLastSale}></Availability>
    )

    expect(container.querySelector('.availability--past')).toBeTruthy()
  })
})
