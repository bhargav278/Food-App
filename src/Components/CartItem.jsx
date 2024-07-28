function CartItem({detailedData}) {


    return (detailedData) ? (
        <div className="sub-category-card">
            <div className="card-details">
                <div className="check-veg text-success">
                    {(detailedData.itemAttribute) ? <>{detailedData.itemAttribute.vegClassifier }</> : <></>}  <span className="bg-white text-danger ms-2 p-1"> {<u className="py-1 px-3 rounded-4 bg-white" >{detailedData.ribbon.text}</u> || <> </>}</span>
                </div>
                <div className="sub-name">
                    {detailedData.name}
                </div>
                <div className="price">
                    &#8377; {detailedData.defaultPrice / 100 || detailedData.price / 100}  
                    {(detailedData.offerTags)?<span className="bg-white text-secondary"> - {detailedData.offerTags[0].title}{detailedData.offerTags[0].subTitle}</span>:<></>}
                </div>
                <div className="rating my-2">
                    {
                        (detailedData.ratings.aggregatedRating.rating) ?
                            <><i className="fa fa-star m-0 p-1 bg-success text-white rounded-circle" aria-hidden="true"></i> <span className="text-success bg-white">{detailedData.ratings.aggregatedRating.rating}</span> ({detailedData.ratings.aggregatedRating.ratingCountV2})</>
                            :<></>
                    }
                    
                </div>
                <div className="description">
                    {detailedData.description}
                </div>
            </div>
            <div className="sub-card-image">
                {
                    (detailedData.imageId) ?
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${detailedData.imageId}`} alt="No image" />:<></>
                }
                
                <button style={{marginLeft:"-1rem"}}>Remove</button>
            </div>
        </div>
    ):<></>
}

export default CartItem
