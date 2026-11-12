import React from 'react'
import { HotelSummary } from 'types/hotel'
import './HotelListItem.scss'
import { Stars } from './Stars/Stars'
import { Reviews } from './Reviews/Reviews'
import { Availability } from './Availability/Availability'

interface Props {
  hotel: HotelSummary
}

export const HotelListItem = ({ hotel }: Props) => {
  return (
    <li className='hotel-list-item'>
      <img
        src={hotel.pictureId}
        alt={hotel.name}
        loading='lazy'
        className='hotel-list-item__picture'
      />
      <p className='hotel-list-item__title'>
        <span className='hotel-list-item__hotel-name'>
          {hotel.name}&nbsp;<Stars count={hotel.stars}></Stars>
        </span>
        <Reviews reviews={hotel.reviews}></Reviews>
      </p>
      <p className='hotel-list-item__preview'>{hotel.preview}</p>
      {hotel.availability && (
        <Availability availability={hotel.availability!}></Availability>
      )}
    </li>
  )
}
