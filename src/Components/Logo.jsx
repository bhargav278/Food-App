import React from 'react'
import './Logo.css'
import { LOGO_LINK } from '../utils/Links'

function Logo() {
    return (
        <div className='logo'>
            <img src={LOGO_LINK} alt="" />
        </div>
    )
}

export default Logo
