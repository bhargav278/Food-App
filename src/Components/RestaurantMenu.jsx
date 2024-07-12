
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3038945&lng=70.80215989999999&restaurantId=74052&catalog_qa=undefined&submitAction=ENTER
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './RestaurantMenu.css'
import ShimmerRestaurantMenu from './ShimmerRestaureantMenu';
import TopPickCard from './TopPickCard';
import CardCategories from './CardCategories';




function RestaurantMenu() {

    const [resData, setResData] = useState([]);
    const [topPicks, setTopPicks] = useState([]);
    const [cardCategories, setcardCategories] = useState([]);

    const {resId} = useParams();
    
    async function fetchMenuData() {
        const fetchedData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3038945&lng=70.80215989999999&restaurantId=${resId}`);
    
        const resData = await fetchedData.json();

        const data = resData?.data?.cards;
    
        
        setResData(data);
        // console.log(data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setTopPicks(data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
        setcardCategories(data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    }

    useEffect(() => {
        fetchMenuData();
    }, [])
    
    let info = resData[2]?.card?.card?.info;


   


    return (resData.length==0) ? <ShimmerRestaurantMenu/> : (
        <div className="res-menu-container">
            <div className="sub-div">
            <div className="title">
                    <h4 className='mt-5  ps-1'>{info?.name}</h4>
            </div>
            
            <div className="details bg-white">
                    <div className="rating bg-white"><i className="fa fa-star m-0 p-1 bg-success text-white rounded-circle" aria-hidden="true"></i> {info?.avgRating} ({info?.totalRatingsString}) - {info?.costForTwoMessage}</div>
                    <div className='bg-white text-danger'>{info?.cuisines.join(", ")}</div>
                    <div className='res-location bg-white'>
                        <b className='bg-white'>Outlet</b> {info?.areaName}
                    </div>
                    <div className='bg-white'>{info?.sla?.slaString}</div>
                    <hr />
                    <div className='bg-white'>Order above 149 for discounted delivery fee</div>
            </div>
            
                <hr />
                <div>
                    <h3 className='text-center my-5'>Menu</h3>
                </div>

                <div className="search-section m-4 mt-5 mb-2 row">
                    <input className='col-sm-12 col-md-8 ms-auto ms-md-1 me-5 me-md-0 bg-white border-0 p-2 my-1' type="text" placeholder='Search any Food or Restaurent' />
                    <button className='btn btn-secondary col-1 ms-auto my-1'>Search</button>
                </div>

                <div className="filter-buttons d-flex justify-content-center gap-3 my-5">
                    <button className=' btn btn-success'>Veg</button>
                    <button className=' btn btn-danger'>Non-Veg</button>
                    <button className='btn btn-primary'>best Seller</button>
                </div>

                <hr />

                {
                    (topPicks) ?
                        <>
                            <div className="title">
                                    <h4 className='my-5  ps-1'>Top Picks</h4>
                            </div>
                             <div className="top-pics-container">
                   
                                {
                                    topPicks.map((menu) => <TopPickCard key={menu?.dish?.info?.id }  topCardData={menu} />)
                                }
                            </div>
                            <hr />
                        </>
                        :
                        <></>
                }
                <div className="category-container">
                {
                    cardCategories.map((card,index) => <CardCategories key={index} data={card?.card?.card } />)
                }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu