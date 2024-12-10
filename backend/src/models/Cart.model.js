import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"User"
    },
    products :[
        {
            productId :{
                type : mongoose.Schema.Types.ObjectId,
                ref :"Product"
            },
        
            quantity : {
                type : Number,
                required : true
            }
            
        }
    ]
},{timestamps : true})

export const Cart = mongoose.model("Cart", CartSchema)