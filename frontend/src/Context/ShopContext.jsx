import { createContext, useState } from "react"
 import all_product from '../Components/Assets/all_product'


export const ShopContext =  createContext(null);

const getDefaultValue = () =>{
    let cart ={}

     

    for(let index = 0 ; index < all_product.length+1 ; index++){
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [ cartItems , setcartItems] = useState(getDefaultValue())

     


    const addtoCart = (itemid)=>{
        setcartItems((prev)=> ({...prev , [itemid]:prev[itemid]+1}))
        console.log(cartItems);
        
    }

    const removetoCart = (itemid)=>{
        setcartItems((prev)=> ({...prev , [itemid]:prev[itemid]-1}))
    }


    const contextValue =  {all_product ,cartItems , addtoCart , removetoCart}

    

    return(
        <ShopContext.Provider value={contextValue} >
        {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider