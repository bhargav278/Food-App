
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3038945&lng=70.80215989999999&restaurantId=74052&catalog_qa=undefined&submitAction=ENTER
import { useEffect, useState ,useContext } from 'react'
import { useParams } from 'react-router-dom';
import './RestaurantMenu.css'
import ShimmerRestaurantMenu from './ShimmerRestaureantMenu';
import TopPickCard from './TopPickCard';
import CardCategories from './CardCategories';
import useResMenu from '../utils/useResMenu';
import VegClassificationContext from './VegClassificationContext';



function RestaurantMenu() {

    // const [resData, setResData] = useState([]);
    const [topPicks, setTopPicks] = useState([]);
    const [cardCategories, setcardCategories] = useState([]);
    const [vegCheck, setVegCheck] = useState("all");

    const { resId } = useParams();
    
    const resData = useResMenu(resId);

    // console.log(vegCheck)
    // const { category } = useContext(VegClassificationContext);
    // console.log(cardCategories);

    useEffect(() => {
        setTopPicks(resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);

        const cardCategory = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 

        setcardCategories(resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    },[resData])
    
    let info = resData[2]?.card?.card?.info;

    // console.log(info);
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
                    <button className=' btn btn-success'
                    onClick={()=>{setVegCheck("VEG")}}
                    >Veg</button>
                    <button className=' btn btn-danger'
                        onClick={() => {
                        setVegCheck("NONVEG")
                    }}
                    >Non-Veg</button>
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
                <VegClassificationContext.Provider value={{category:vegCheck}}>
                <div className="category-container">
                    {
                        cardCategories ?
                    cardCategories.map((card,index) => <CardCategories key={index} data={card?.card?.card } />) :<></>
                }
                </div>
                </VegClassificationContext.Provider>
            </div>
        </div>
    )
}

export default RestaurantMenu