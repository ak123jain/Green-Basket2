import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const ProductSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    
    image:{
        type : String,
        required : true
    },
    new_price :{
        type : Number,
        required : true
    },
    old_price :{
        type : Number,
    }
},{timestamps: true})

ProductSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", ProductSchema)

