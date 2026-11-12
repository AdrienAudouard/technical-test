import React from 'react'
import { Hotel } from 'types/hotel'
import './HotelListItem.scss'
import { Stars } from './Stars/Stars'
import { Reviews } from './Reviews/Reviews'

interface Props {
  hotel: Hotel
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
    </li>
  )
}
