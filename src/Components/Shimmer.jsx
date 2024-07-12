import React from 'react'

function Shimmer() {
  return (
    <div className="main-section">
      <div className="search-section m-4 mt-5 mb-2 row">
          <input className='col-sm-12 col-md-5 ms-auto me-5  border-0 p-2 my-1 shimmer' type="text" disabled />
          <button className='btn btn-danger col-2 me-auto my-1 shimmer-btn'></button>
    </div>
      <div className="shimmer-btn-group">
        <div  className=' shimmer-btn'></div>
        <div  className=' shimmer-btn'></div>
      </div>
        <div className="title mt-4 "><h3 className='ps-5 mx-5 py-2  text-danger shimmer'></h3></div>
        
        <div className="shimmer-card-container">
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
        </div>
      </div>

  )
}

export default Shimmer
