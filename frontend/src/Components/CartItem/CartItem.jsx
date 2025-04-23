 

import  { useContext , useState , useEffect} from "react";
import './CartItem.css'
import { Link } from "react-router-dom";
 
 

import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    // Destructure the correct variables from context
    const { cartItems, removefromCart, all_product } = useContext(ShopContext);
    const [totalamount , settotalamount] = useState(0)  

    
    useEffect(()=>{
        let total = 0
        all_product.forEach((e)=>{
             if (cartItems[e.id] > 0) {
                total += e.new_price * cartItems[e.id]
             }
        })
        settotalamount(total)
    }, [cartItems, all_product])


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
            <div className="totalamount">
                <h2>total amount : ${totalamount}</h2>
                 

            </div>
             <Link  to="/payment" state={{ totalamount }} ><button>Place Order</button></Link>
              
        </div>
    );
};

export default CartItem;