import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const ProductSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required:true
    },
    category:{
        type : String,
        required : true
    },
    stock :{
        type : Number,
        required : true
    }
},{timestamps: true})

ProductSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", ProductSchema)

