import { render } from '@testing-library/react'
import { Reviews } from './Reviews'
import React from 'react'

describe('Review', () => {
  beforeEach(() => {
    const languagesSpy = jest.spyOn(window.navigator, 'language', 'get')
    languagesSpy.mockReturnValue('fr-FR')
  })

  it('should display the score and the review count', () => {
    const { container } = render(
      <Reviews reviews={{ count: 10, score: 5.06 }}></Reviews>
    )

    expect(container.textContent).toBe('5,1\xa0(10)')
  })

  it('should display the score of 0 and the review count', () => {
    const { container } = render(
      <Reviews reviews={{ count: 10, score: 0 }}></Reviews>
    )

    expect(container.textContent).toBe('0\xa0(10)')
  })
})
