import React from 'react'
import RestaurentCard,{NonVegClassified} from './RestaurentCard'
import './RestaurentContainer.css'
import { Link } from 'react-router-dom'

const NonVegLabeledRestaurentCard = NonVegClassified(RestaurentCard);


function ReataurentContainer({ restaurents }) {
  // console.log(restaurents)
  return (
    <div className='restaurent-container'>
      {
        
        restaurents.map((restaurent) => <Link key={restaurent?.info?.id} to={"/Food-App/restaurants/" + restaurent?.info?.id} className='link relative'>
          {/* (res.info.veg) ? resCard  : EnhancedRescard*/
            (restaurent?.info?.veg) ? <RestaurentCard data={restaurent?.info} />: <NonVegLabeledRestaurentCard data={restaurent?.info}/>
          
          }
          {/* <RestaurentCard data={restaurent?.info} /> */}
        </Link>)
        
        }
          
    </div>
  )
}

export default ReataurentContainer
