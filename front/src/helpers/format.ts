export const formatAmount = (value: number) => {
  return Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value)
}

export const formatPercent = (value: number) => {
  return Intl.NumberFormat('fr-FR', {
    style: 'percent',
    maximumFractionDigits: 0
  }).format(value)
}
