import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { ChevronDown, Filter, SlidersHorizontal } from 'lucide-react';
 

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Featured');
  
  const filteredProducts = all_product.filter(item => props.category === item.category);
  
  const handleSortChange = (option) => {
    setSortOption(option);
    setSortOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Banner */}
      <div className="relative rounded-lg overflow-hidden mb-8 shadow-md mt-40">
        <img 
          src={props.banner} 
          alt="Category Banner" 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
          <h1 className="text-white text-4xl font-bold p-8">
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </h1>
        </div>
      </div>
      
      {/* Filter and Sort Bar */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-gray-500" />
          <p className="text-gray-700">
            Showing <span className="font-medium">{filteredProducts.length}</span> out of {all_product.length} Products
          </p>
        </div>
        
        <div className="relative">
          <button 
            className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors"
            onClick={() => setSortOpen(!sortOpen)}
          >
            <SlidersHorizontal size={18} className="text-gray-500" />
            <span>Sort by: {sortOption}</span>
            <ChevronDown size={18} className={`text-gray-500 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {sortOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <ul className="py-1">
                {["Featured", "Price: Low to High", "Price: High to Low", "Newest"].map((option) => (
                  <li 
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item, i) => (
          <div key={i} className="transform transition-transform hover:scale-105">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <Filter size={48} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-700">No products found</h3>
          <p className="text-gray-500 mt-2">Try changing your filter criteria</p>
        </div>
      )}
      
      {/* Load More Button (if needed) */}
      {filteredProducts.length > 12 && (
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;








// import dropdown_icon from '../Components/Assets/dropdown_icon.png'