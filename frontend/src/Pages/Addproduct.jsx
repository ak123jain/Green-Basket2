import React from 'react'
import './CSS/Addproduct.css'
import { useState } from 'react'
import axios from 'axios'
import addproduct from '../Components/Assets/addproduct.avif'
import {useNavigate} from 'react-router-dom'

 const Addproduct = () => {

    const [name , setname] = useState('');
    const [category , setcategory] = useState('')
    const [old_price , setold_price] = useState('')
    const [new_price , setnew_price] = useState('')
    const [image , setimage] = useState(null)

    const Navigator = useNavigate()

    const handleimage = (e) =>{
        const file = e.target.files[0];
        setimage(file);
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
                const response = await axios.post('http://localhost:3001/product/addproduct' , formdata, {
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
         <div className="addproduct">
             
            <div className="addproductcontainer">
                
                
                <form onSubmit={onhandleSubmit} >

                <img  src={addproduct} alt="" />

                    <input
                    type="text" 
                    value={name}
                    placeholder="product name"
                    onChange={(e)=> setname(e.target.value)}
                    />

                    <input
                    type="text" 
                    value={category}
                    placeholder="category"
                    onChange={(e)=> setcategory(e.target.value)}
                    />

                    <input
                    type="Number" 
                    value={old_price}
                    placeholder="enter old price"
                    onChange={(e)=> setold_price(e.target.value)}
                    />

                    <input
                    type="Number" 
                    value={new_price}
                    placeholder=" enter new price"
                    onChange={(e)=> setnew_price(e.target.value)}
                    />

                    <input
                    type="file" 
                    placeholder="upload file"
                    onChange={handleimage}
                    />

                   <button>Submit</button>

                    </form> 

            </div>
         </div>
    )
}


export default Addproduct