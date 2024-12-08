// import React , {useContext} from "react";

// import '../CartItem.css'
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from '../Assets/cart_cross_icon.png'
 

// const CartItem = () => {

//     const {cartItem , removefromCart , all_products} = useContext(ShopContext)

//     return(
//         <div className="cartitems">
//             <div className="cartItemformat">
//                 <p>Products</p>
//                 <p>price</p>
//                 <p>tittle</p>
//                 <p>quantity</p>
//                 <p>total</p>
//                 <p>remove</p>
//             </div>
//             <hr />
//              {all_products.map((e)=>{
//                 if (cartItem[e.id]>0) {// matlab es id ka product available ha
                    
//                     <div>
//                     <div className="cartitems-format">
//                         <img src={e.image} alt="" className="carticon-producticon"
//                          />
//                          <p>{e.name}</p>
//                          <p>${e.new_price}</p>
//                           {/* es id ka jitna product ha vo mil jyege */}
//                          <button className="caritems-quantity" >{cartItem[e.id]}</button> 
//                          <p>{e.new_price* cartItem[e.id]}</p>
//                          <img src="" alt="" onClick={()=>{removefromCart(e.id)}} />
//                     </div>
//                  </div>
//                 }
//              })}
//         </div>
//     )

// }

// export default CartItem

import React, { useContext } from "react";
import './CartItem.css'
 
 

import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    // Destructure the correct variables from context
    const { cartItems, removefromCart, all_product } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartItemformat">
                <p>Products</p>
                <p>Price</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {/* Iterate over products */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) { // Check if the product is in the cart
                    return ( // Return JSX
                        <div key={e.id} className="cartitems-format">
                            <img
                                src={e.image}
                                alt=""
                                className="carticon-producticon"
                            />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">
                                {cartItems[e.id]}
                            </button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img
                                src={remove_icon}
                                alt="Remove"
                                className="remove-icon"
                                onClick={() => removefromCart(e.id)}
                            />
                        </div>
                    );
                }
                return null; // Return null for items not in the cart
            })}
        </div>
    );
};

export default CartItem;
