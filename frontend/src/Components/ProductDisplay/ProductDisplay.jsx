import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props

    const {addtoCart} = useContext(ShopContext)

    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-image">
                    <img src={product.image} alt="" />
                </div>
                <button className='btn1' onClick={()=>{addtoCart(product.id)}} >Add to cart</button>
                <button className='btn2' >BUY NOW</button>
            </div>
            <div className="productDisplay-right">
                <div className="product-name">
                    <h1 className='product-name' >{product.name}</h1>
                    <div className="productdisplay-rightstar">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>

                    <div className="item-price">
                        <div className="product-oldprice">
                            ${product.old_price}
                        </div>
                        <div className="product-newprice">
                        ${product.new_price}
                        </div>
                    </div> 
                    <h1 className="offer" >Available offers</h1>
                    <div className="offers">    
                        <ul>
                            <li>Special PriceGet extra 2% off (price inclusive of cashback/coupon)T&C</li>
                            <li>Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C</li>
                            <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
                            <li>Bank OfferFlat ₹1000 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹15,000T&C</li>
                        </ul>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
