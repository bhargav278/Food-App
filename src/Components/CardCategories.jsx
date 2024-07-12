import './CardCategories.css'
import Collapsible from 'react-collapsible'
import SubCategoryCard from './SubCategoryCard';
import './SubCategoryCard.css'

function CardCategories({ data }) {
    
    let categoryData = data?.itemCards;

    // console.log(categoryData)

    let cardContainer = document.getElementsByClassName("category-sub-cards");
    
    return (categoryData) ? (
        <div className="category-card">
            <div className="category-sub-cards">
                
                <Collapsible trigger={data.title +"("+ data.itemCards.length + ")"}>
                {
                        categoryData.map((card) => <SubCategoryCard key={card.card.info.id} detailedData={card?.card?.info } />)
                }
                </Collapsible>
                
            </div>
        </div>
    ):<></>
}

export default CardCategories