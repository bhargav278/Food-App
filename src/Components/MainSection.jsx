import React, { useEffect, useState } from 'react'

import RestaurentContainer from './ReataurentContainer'
import './MainSection.css'
import './Search.css'
import Shimmer from './Shimmer'



function Main() {

  const [restaurents, setRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState(restaurents);
  const [searchRestaurant, setSearchRestaurent] = useState("");

  const [title, setTitle] = useState("All Restaurents");

  async function fetchData()  {
    
    const fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const data = await fetchedData.json();

    const resData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurents(resData);
    setFilteredRestaurents(resData);

  }

  useEffect(() => {
    fetchData();

  },[])

  function filterRestaurent() {
    let FRes = restaurents.filter((res) => (res.info.avgRating >= 4.5))
    
    setFilteredRestaurents(FRes)
    setTitle("Top Restaurents")
    setSearchRestaurent("");
  }
  function allRestaurent() {
    setFilteredRestaurents(restaurents);
    setTitle("All Restaurents");
    setSearchRestaurent("");
  }

  
  

  return (restaurents.length===0) ? <Shimmer/> : (
      <div className="main-section">
      <div className="search-section m-4 mt-5 mb-2 row">
        <input className='col-sm-12 col-md-5 ms-auto me-5 bg-white border-0 p-2 my-1' type="text" placeholder='Search any Food or Restaurent'
        value={searchRestaurant}
        onChange={(e)=>setSearchRestaurent(e.target.value)}
        />
        <button className='btn btn-danger col-2 me-auto my-1'
          onClick={() => {
            const searchFilterRestaurent = restaurents.filter((res) => {
              return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase());
            })
            setFilteredRestaurents(searchFilterRestaurent);
            if (searchRestaurant.length===0) {
              setTitle("All Restaurents");
            }
            else {
              setTitle("Searched Restaurents");
            }
        }}
        >Search</button>
      </div>
      <div className="row">
        <button onClick={filterRestaurent} className='btn btn-success w-auto p-2 mx-2 ms-auto my-3'>Top Restaurents</button>
        <button onClick={allRestaurent} className='btn btn-success w-auto p-2 mx-2 me-auto  my-3'>All Restaurents</button>
      </div>
      <div className="title mt-4 "><h3 className='ps-5 mx-5 py-2 text-danger bg-white'>{title}</h3></div>
      <RestaurentContainer restaurents={filteredRestaurents} />
      </div>
  )
}

export default Main
