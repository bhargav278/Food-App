import React from 'react'
import './TopPickCard.css'

function TopPickCard({ topCardData }) {


    // console.log(topCardData)
    let imgId = topCardData?.creativeId;

    let styles = {
        background: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${imgId}")`,
        backgroundSize : "cover"
    }
  return (
      <div style={styles} className='top-pick-card'>
    
          <div className='top-pick-details' >
              <h5>&#8377; { topCardData?.dish?.info?.price/100 || topCardData?.dish?.info?.defaultPrice/100 || 0}</h5>
              
                  {
                      (topCardData?.dish?.info?.price/100 || topCardData?.dish?.info?.defaultPrice/100)?<button>Add</button> : <></>
                  }
        
          </div>
    </div>
  )
}

export default TopPickCard
