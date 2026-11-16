export const formatAmount = (value: number) => {
  return Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value)
}

export const formatPercent = (value: number) => {
  return Intl.NumberFormat(navigator.language, {
    style: 'percent',
    maximumFractionDigits: 0
  }).format(value)
}

export const formatScore = (value: number) => {
  return Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 1
  }).format(value)
}
