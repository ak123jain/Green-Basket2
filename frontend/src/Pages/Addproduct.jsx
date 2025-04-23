import './CSS/Addproduct.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const [name, setname] = useState('');
    const [category, setcategory] = useState('')
    const [old_price, setold_price] = useState('')
    const [new_price, setnew_price] = useState('')
    const [image, setimage] = useState(null)
    const [preview, setPreview] = useState(null)

    const Navigator = useNavigate()

    const handleimage = (e) => {
        const file = e.target.files[0];
        setimage(file);
        
        // Create preview for selected image
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }

    const onhandleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData();

        formdata.append('category', category);
        formdata.append('name', name);
        formdata.append('old_price', old_price);
        formdata.append('new_price', new_price);

        if (image) {
            formdata.append('image', image);
        }
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/addproduct`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            })
            console.log('product added succesfully:', response.data.data)
            console.log('product added succesfully:', response.data.messege)
            Navigator('/getproduct')
        } catch (error) {
            console.error('Error fetching product data:', error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-cyan-800 py-4">
                    <h2 className="text-center text-2xl font-bold text-white">Add New Product</h2>
                </div>
                
                <form onSubmit={onhandleSubmit} className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Enter product name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                type="text"
                                id="category"
                                required
                                placeholder="Enter product category"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="old_price" className="block text-sm font-medium text-gray-700">Original Price</label>
                                <input
                                    type="number"
                                    id="old_price"
                                    required
                                    placeholder="Original price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={old_price}
                                    onChange={(e) => setold_price(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="new_price" className="block text-sm font-medium text-gray-700">Sale Price</label>
                                <input
                                    type="number"
                                    id="new_price"
                                    required
                                    placeholder="Sale price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={new_price}
                                    onChange={(e) => setnew_price(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Product Image</label>
                            <div className="mt-1 flex flex-col items-center">
                                {preview && (
                                    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                                        <img src={preview} alt="Preview" className="h-40 w-full object-cover" />
                                    </div>
                                )}
                                <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                    <span>Choose file</span>
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        onChange={handleimage} 
                                        accept="image/*"
                                    />
                                </label>
                                <p className="text-xs text-gray-500 mt-1">
                                    {image ? image.name : "No file chosen"}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addproduct