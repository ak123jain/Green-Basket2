import React from 'react';
import Item from '../Item/Item';
import new_collections from '../Assets/new_collections';

const NewCollection = () => {
    return (
        <div className="relative px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-white to-green-400 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-40 translate-y-1/3 -translate-x-1/3"></div>
            
            {/* Main content */}
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">New Arrivals</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
                        🌿 Exclusive Green Deals
                    </h1>
                    <div className="h-1 w-24 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-xl mx-auto text-gray-600">
                        Discover our latest collection of sustainable products for your garden and home — handpicked for quality and eco-friendliness.
                    </p>
                </div>
                
                {/* Filter/sort controls */}
                <div className="flex flex-wrap justify-between items-center mb-10">
                    <div className="flex gap-2 mb-4 md:mb-0">
                        <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium">All Items</button>
                        <button className="bg-white text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50">Featured</button>
                        <button className="bg-white text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50">Best Sellers</button>
                    </div>
                    <div className="relative">
                        <select className="appearance-none bg-white border border-green-200 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Product grid - fixed to 3 columns */}
                <div className="grid grid-cols-3 gap-8">
                    {new_collections.map((item, i) => (
                        <div key={i} className="transform hover:-translate-y-2 transition-transform duration-300 ">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                    <img src={item.image} alt={`Product ${i+1}`} className="object-cover h-full w-full" />
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">New</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">Sustainable and eco-friendly</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-green-700 font-bold">${item.new_price}</span>
                                            <span className="text-gray-400 line-through text-sm ml-2">${item.old_price}</span>
                                        </div>
                                        <button className="text-green-700 hover:text-white border border-green-700   hover:bg-green-600 rounded-full p-1 transition-colors duration-300 w-8 ">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more button */}
                <div className="text-center mt-12">
                    <button className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                        View All Collections
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;
