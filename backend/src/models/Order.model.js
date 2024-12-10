import mongoose ,{Schema} from "mongoose";

const orderSchema = new Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
     products : [
        {
            productsId :{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product",
                required : true
            },
            quantity : {
                type : Number,
                required : true
            }
        }
     ],

     totalPrice :{
        type : Number,
        required : true
     },

     status :{
        type : String,
        enum : ["pending" , "completed"],
     },

     shippingAdress : {
        type : String , 
        required : true
     }

},{timestamps : true})

export const Order = mongoose.model("Order",orderSchema)
