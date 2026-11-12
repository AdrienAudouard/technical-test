import React, { useEffect, useState } from 'react'

import 'styles/header.scss'

import StaycationLogo from './StaycationLogo'

const Header = () => {

  /**
   * TODO: just to build, to change 
   */
  const [user, setUser] = useState<any>(undefined)

  useEffect(() => {
    fetch('http://localhost:9000/users/1')
      .then(async res => {
        const result = await res.json()
        setUser(result)
      })
      .catch(e => console.warn('Error: ', e))
  }, [])

  return (
    <div className='header'>
      <StaycationLogo />
      {user && (
        <div className='header__user'>
                    Welcome, {user.firstName}!
        </div>
      )}
    </div>
  )
}

export default Header
