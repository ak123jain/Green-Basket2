import React from 'react';
import fd from '../Assets/basket.png'

const Offers = () => {
    return (
        <div className="bg-green-100 rounded-2xl shadow-lg py-12 px-8 md:px-16 my-16 mx-4 md:mx-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Side Content */}
                <div className="space-y-6 max-w-xl text-center md:text-left">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-amber-800">Exclusive</h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Offers For You</h1>
                    </div>
                    
                    <p className="text-lg font-medium tracking-wider text-gray-700 bg-white bg-opacity-60 py-2 px-4 rounded-lg inline-block">
                        ONLY ON BEST SELLERS PRODUCTS
                    </p>
                    
                    <div className="relative">
                        <button className="bg-green-600 hover:bg-green-500 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Check Now
                        </button>
                        <div className="absolute -right-2 -top-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            50% OFF
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">24h</div>
                            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">🔥</div>
                        </div>
                        <p className="text-sm text-gray-600">Limited time offer!</p>
                    </div>
                </div>
                
                {/* Right Side Image */}
                <div className="relative">
                    <div className="bg-white rounded-full p-4 shadow-xl transform hover:rotate-3 transition-transform duration-300">
                        <img
                            src={fd}
                            alt="Special Offers Basket"
                            className="max-w-xs md:max-w-sm object-contain"
                        />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-green-600 shadow-md">
                        New
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold text-amber-600 shadow-md">
                        Sale
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;