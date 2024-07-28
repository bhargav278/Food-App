import './CardCategories.css'
import Collapsible from 'react-collapsible'
import SubCategoryCard from './SubCategoryCard';
import './SubCategoryCard.css'
import VegClassificationContext from './VegClassificationContext';
import { useContext } from 'react';

function CardCategories({ data }) {
    
    let categoryData = data?.itemCards;

    // console.log(categoryData)

    const { category } = useContext(VegClassificationContext)
    

    
   

    return (categoryData) ? (
        <div className="category-card">
            <div className="category-sub-cards">

                
                
                <Collapsible trigger={<div className='bg-white flex justify-between'><span className='bg-white'>{data.title + "(" + data.itemCards.length + ")"}</span><span className='bg-white'><i className="fa-solid fa-chevron-down"></i></span></div>}>
                {
                        categoryData.map((card) => <SubCategoryCard key={card.card.info.id} detailedData={card?.card?.info } />)
                }
                </Collapsible>
                
            </div>
        </div>
    ):<></>
}

export default CardCategories