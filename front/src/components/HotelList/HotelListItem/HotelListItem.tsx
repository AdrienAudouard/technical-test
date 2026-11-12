import React from 'react';
import { Hotel } from "types/hotel"
import './HotelListItem.scss';
import { Stars } from './Stars';

interface Props {
    hotel: Hotel;
}

export const HotelListItem = ({hotel} : Props) => {
    return <li className='hotel-list-item'>
        <img src={hotel.pictureId} alt={hotel.name} loading='lazy' className='hotel-list-item__picture'/>
        <p className='hotel-list-item__name'>{hotel.name}&nbsp;<Stars count={hotel.stars}></Stars></p>
        <p className='hotel-list-item__preview'>{hotel.preview}</p>
    </li>
}