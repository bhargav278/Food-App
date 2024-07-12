import React from 'react'
import Logo from './Logo'
import Navmenus from './Navmenus'
import './Header.css'

function Header() {
  return (
    <div className="header">
          <Logo />
          <Navmenus/>
    </div>
  )
}

export default Header
