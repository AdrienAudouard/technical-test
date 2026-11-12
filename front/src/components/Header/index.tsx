import 'styles/header.scss'

import StaycationLogo from './StaycationLogo'
import { useUser } from './hooks/useUser'
import React from 'react'
import { DEFAULT_USER_ID } from './constants'

const Header = () => {
  const { data: user } = useUser(DEFAULT_USER_ID)

  return (
    <header className='header'>
      <StaycationLogo />
      {user && <div className='header__user'>Welcome, {user.firstName}!</div>}
    </header>
  )
}

export default Header
