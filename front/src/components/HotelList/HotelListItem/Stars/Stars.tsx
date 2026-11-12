import React from 'react'

interface Props {
  count: number
}

export const Stars = ({ count }: Props) => {
  return <span>{'*'.repeat(count)}</span>
}
