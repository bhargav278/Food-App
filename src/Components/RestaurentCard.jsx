import React from 'react'
import './RestaurentCard.css'
import { CARD_IMG } from '../utils/Links'

function RestaurentCard({ data }) {
  return (
    <div className='restaurent-card bg-white'>
      <img src={CARD_IMG +data.cloudinaryImageId} alt="" />
          <div className="card-details d-flex flex-column ps-2 mt-2 bg-white">
            <h5 className='m-0 bg-white overflowx-hidden card-title'>{data?.name}</h5>
        <h6 className='my-2 bg-white'><i className="fa fa-star m-0 bg-danger text-white" aria-hidden="true"></i> <b className="bg-white">{data.avgRating}</b></h6>
            <p className='m-0 bg-white font-weight'>{data.sla.slaString}</p>
            <p className='m-0 bg-white cuisines'>{data.cuisines.join(", ")}</p>
            <p className='m-0 bg-white font-weight'>{data.areaName}</p>
          </div>
    </div>
  )
}

export default RestaurentCard
