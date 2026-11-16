import React from 'react'

import { HotelList } from './HotelList/HotelList'
import '../styles/app.scss'
import { Header } from './Header'

export const App = () => (
  <div className='app'>
    <Header />
    <div className='app__body'>
      <HotelList></HotelList>
    </div>
  </div>
)
