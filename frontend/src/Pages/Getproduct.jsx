import axios from 'axios';
import { useEffect, useState } from 'react';
import './CSS/getproduct.css';

const Getproduct = () => {
    const [products, setproduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchdata = async() => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/getproduct`);
                console.log("akshi jain", response.data);
                console.log("aksdfgh", response.data.statuscode.data);
                
                setproduct(response.data.statuscode.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchdata();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Product Collection</h1>
                    <div className="text-sm text-gray-500">
                        {products.length} products found
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-56 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="mb-2">
                                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center">
                                        <span className="text-lg font-bold text-indigo-600">${product.new_price}</span>
                                        <span className="ml-2 text-sm text-gray-500 line-through">${product.old_price}</span>
                                        {calculateDiscount(product.old_price, product.new_price) > 0 && (
                                            <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                                                {calculateDiscount(product.old_price, product.new_price)}% OFF
                                            </span>
                                        )}
                                    </div>
                                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {products.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                        <p className="mt-2 text-sm text-gray-500">Try adding some products to your inventory.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Helper function to calculate discount percentage
const calculateDiscount = (oldPrice, newPrice) => {
    if (!oldPrice || !newPrice) return 0;
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(discount);
};

export default Getproduct;