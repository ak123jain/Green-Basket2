import React, { useContext } from 'react'
import './CSS/ShopCategory.css' 
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
 
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const  ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    return (
        <div className="shop-category">
        <div className="container">
          <img className="banner" src={props.banner} alt="" />
          <div className="para">
            <p><span>Showing 1-12 </span> out of 36 Product</p>
            <div className="sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="products">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      
          
    )
}

export default ShopCategory