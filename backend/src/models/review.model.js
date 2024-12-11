import mongoose , {Schema} from "mongoose"


const reviewschema = new Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required: true
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "User",
        required : true
    },
    rating :{
        type : Number,
        required : true
    },
    comments :{
        type : String
    },
    createdAt:{
        type: Date,
        default : Date.now
    }

} , {timestamps: true})

export const Review = mongoose.model("Review" , reviewschema)