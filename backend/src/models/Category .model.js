import mongoose , {Schema} from "mongoose";

const CategorySchema = new Schema({

    name : {
        type : String,
        required : true,
        unique : true
    },

    description :{
        type : String,
        required : true
    },

    createdAt: {
        type: Date,
        default: Date.now,
      },

},{timestamps : true})

export const Category = mongoose.model("Category" , CategorySchema)