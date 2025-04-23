import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addtoCart } = useContext(ShopContext)
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    // Calculate discount percentage
    const discountPercentage = Math.round(((product.old_price - product.new_price) / product.old_price) * 100)

    // Create an array of the same image for demo purposes (in production, you'd have different images)
    const productImages = [product.image, product.image, product.image, product.image]

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left side - Product images */}
                    <div className="flex flex-col space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
                            <img 
                                src={productImages[selectedImage]} 
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                            <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                {discountPercentage}% OFF
                            </span>
                        </div>
                        
                        <div className="flex space-x-4 overflow-auto py-1">
                            {productImages.map((img, index) => (
                                <div 
                                    key={index}
                                    className={`cursor-pointer w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-indigo-600' : 'border-gray-200'}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${product.name} view ${index+1}`}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Product details */}
                    <div className="flex flex-col space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            
                            <div className="flex items-center mt-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <img 
                                            key={i}
                                            src={i < 4 ? star_icon : star_dull_icon} 
                                            alt="rating star" 
                                            className="h-5 w-5"
                                        />
                                    ))}
                                </div>
                                <p className="ml-2 text-sm text-gray-500">(122 reviews)</p>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <p className="text-3xl font-bold text-indigo-600">${product.new_price}</p>
                            <p className="ml-3 text-xl text-gray-500 line-through">${product.old_price}</p>
                        </div>

                        <div className="border-t border-b border-gray-200 py-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Available offers</h2>
                            <ul className="space-y-3">
                                <li className="flex">
                                    <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm">Special Price: Get extra 2% off (price inclusive of cashback/coupon)</span>
                                </li>
                                <li className="flex">
                                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-sm">Bank Offer: Get $50 Instant Discount on first UPI transaction on order of $200 and above</span>
                                </li>
                                <li className="flex">
                                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-sm">Bank Offer: 5% Unlimited Cashback on Axis Bank Credit Card</span>
                                </li>
                                <li className="flex">
                                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-sm">Bank Offer: Flat $1000 off on HDFC Bank Credit Card EMI Transactions</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button 
                                    className="px-3 py-2 text-gray-600 hover:bg-gray-100" 
                                    onClick={decrementQuantity}
                                >
                                    −
                                </button>
                                <span className="px-4 py-2">{quantity}</span>
                                <button 
                                    className="px-3 py-2 text-gray-600 hover:bg-gray-100" 
                                    onClick={incrementQuantity}
                                >
                                    +
                                </button>
                            </div>
                            
                            <div className="text-sm text-gray-500">
                                {product.stock > 10 ? 'In stock' : product.stock > 0 ? `Only ${product.stock} left!` : 'Out of stock'}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                className="flex items-center justify-center px-6 py-3 border border-indigo-600 rounded-md text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
                                onClick={() => addtoCart(product.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Add to cart
                            </button>
                            <button className="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-700 transition-colors">
                                Buy now
                            </button>
                        </div>

                        <div className="pt-4">
                            <div className="flex items-center text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Free returns within 30 days
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay