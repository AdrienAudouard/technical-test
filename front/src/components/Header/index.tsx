import 'styles/header.scss'

import { useUser } from './hooks/useUser'
import React from 'react'
import { PLACEHOLDER_USER_ID } from './constants'
import { StaycationLogo } from './StaycationLogo'

export const Header = () => {
  const { data: user } = useUser(PLACEHOLDER_USER_ID)

  return (
    <header className='header'>
      <StaycationLogo />
      {user && <div className='header__user'>Welcome, {user.firstName}!</div>}
    </header>
  )
}
