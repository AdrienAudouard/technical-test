import { formatAmount, formatPercent, formatScore } from './format'

describe('format', () => {
  beforeEach(() => {
    const languagesSpy = jest.spyOn(window.navigator, 'language', 'get')
    languagesSpy.mockReturnValue('fr-FR')
  })

  describe('formatAmount', () => {
    it('should format an amount in euro without digits', () => {
      expect(formatAmount(100)).toBe('100\xa0€')
    })

    it('should format an amount in euro and round up', () => {
      expect(formatAmount(100.7)).toBe('101\xa0€')
    })
  })

  describe('formatPercent', () => {
    it('should format a rate as a percentage', () => {
      expect(formatPercent(0.5)).toBe('50\xa0%')
    })

    it('should format a rate as a percentage without digits', () => {
      expect(formatPercent(0.556)).toBe('56\xa0%')
    })
  })

  describe('formatScore', () => {
    it('should format a number without digits', () => {
      expect(formatScore(10)).toBe('10')
    })

    it('should format a number with one digits', () => {
      expect(formatScore(10.54)).toBe('10,5')
    })
  })
})
