import { asynchandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/ApiError.js"
import {uploadfileoncloudniary} from "../utils/cloudiary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { Product } from "../models/Product.model.js"; // Import the Product model

const addproduct = asynchandler(async (req, res) => {
    
    const {name , category , new_price , old_price} = req.body

    console.log("all name are here", name);
    console.log("all category are here", category);
    console.log("all new_price are here", new_price);
    console.log("all old_price are here", old_price);
    
    
    if (!name || !category || !new_price || !old_price ) {
        throw new ApiError(201 , "filed are requhired for submission")
    }

    console.log("req.file:", req.file);
    

    const imagelocalpath = req.file?.path

    if (!imagelocalpath) {
        throw new ApiError(201, "image is required for submission");
    }

    const image = await uploadfileoncloudniary(imagelocalpath)

    if ( !image) {
        throw new ApiError(201, " allll fields are required for submission");
    }

    
    const newproduct = await Product.create({
        name,
        category,
        new_price,
        old_price,
        image : image.url
    })

    return res.status(200).json(
        new ApiResponse({
            success: true, message: 'Product added successfully',  data: newproduct
        } )
    )

} )


const getproduct = asynchandler(async(req , res)=>{
    const products = await Product.find({})
    return res.status(200).json(
        new ApiResponse({
            success: true, message: 'Product fetched successfully',   data: products
        })
    )
})
    

export { addproduct  , getproduct } // Export the addproduct function ;
