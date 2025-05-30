import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , () => {
        console.log(`server is listenning at port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED " , err);
})