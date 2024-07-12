import React from 'react'
import RestaurentCard from './RestaurentCard'
import './RestaurentContainer.css'
import { Link } from 'react-router-dom'

function ReataurentContainer({ restaurents }) {
  return (
    <div className='restaurent-container'>
      {
        
        restaurents.map((restaurent) => <Link key={restaurent?.info?.id} to={"/restaurants/"+ restaurent?.info?.id} className='link'><RestaurentCard  data={restaurent?.info} /></Link>)
        
        }
          
    </div>
  )
}

export default ReataurentContainer
