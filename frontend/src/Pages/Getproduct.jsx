import axios from 'axios';
 
import { useEffect , useState} from 'react';
import './CSS/getproduct.css'

const  Getproduct = () => {

    const [products , setproduct] = useState([]);
     
    useEffect(()=>{
        const fetchdata = async()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/getproduct`)
                console.log("akshi jain" , response.data);
                console.log("aksdfgh" , response.data.statuscode.data);
                
                
                setproduct(response.data.statuscode.data)
                
            } catch (error) {
                console.error('Error fetching product data:', error)
            }
        }

        fetchdata()
    }, [])


    return (
         <div className="product_list">
                <h1>Product List</h1>
                
               <div className="product-list-container">
                {products.map((product)=>{
                    return (
                        <div key={product._id} className="product-list-cart">
                            <img src={product.image} alt="" />
                            <h3>{product.name}</h3>
                            <h3> Category : {product.category}</h3>
                            <h3> New : price{product.new_price}</h3>
                            <h3> Old : Price{product.old_price}</h3>
                        </div>
                    )
                })}
               </div>
         </div>
    )
}

export default Getproduct
