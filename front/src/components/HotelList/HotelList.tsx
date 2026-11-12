import React from 'react'
import { useHotels } from './hooks/useHotels'
import './HotelList.scss'
import { HotelListItem } from './HotelListItem/HotelListItem'

export const HotelList = () => {
  const { data: hotels, isLoading, isError } = useHotels()

  if (isLoading) {
    return <p>Loading hotels</p>
  }

  if (isError) {
    return <p>Unable to load hotels. Please try again later.</p>
  }

  if (hotels.length === 0) {
    return <p>No hotel available at the moment.</p>
  }

  return (
    <ul className='hotel-list'>
      {hotels.map(hotel => (
        <HotelListItem hotel={hotel} key={hotel.id}></HotelListItem>
      ))}
    </ul>
  )
}
