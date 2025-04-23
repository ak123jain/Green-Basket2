import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props
    
    return (
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                <ol className="flex items-center flex-wrap">
                    <li className="flex items-center">
                        <a href="/" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                            HOME
                        </a>
                    </li>
                    
                    <li className="flex items-center mx-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </li>
                    
                    <li className="flex items-center">
                        <a href="/shop" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                            SHOP
                        </a>
                    </li>
                    
                    <li className="flex items-center mx-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </li>
                    
                    <li className="flex items-center">
                        <a href={`/category/${product.category}`} className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                            {product.category}
                        </a>
                    </li>
                    
                    <li className="flex items-center mx-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </li>
                    
                    <li className="flex items-center">
                        <span className="text-sm font-medium text-green-600">
                            {product.name}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrum