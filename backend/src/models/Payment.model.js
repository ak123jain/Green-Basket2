import mongoose , {Schema} from "mongoose";

const paymentSchema = new Schema({
    ordername : {
        type : String,
        required : true
    },


    amount : {
        type : Number,
        required : true
    },
    order_id : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        enum : ["pending" , "success" , "failed"]
    },
    payment_id : {
        type : String,
        required : true
    },
    currency : {
        type : String,
        required : true
    },
    payment_date : {
        type : Date,
        required : true
    }

} , {timestamps: true})

export const Payment = mongoose.model("Payment", paymentSchema)