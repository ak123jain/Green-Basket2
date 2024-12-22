import { ApiError } from '../utils/ApiError.js';
import { asynchandler } from '../utils/asynchandler.js';
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";


export const verifyjwt = asynchandler(async(req , _, next)=>{

   try {

    console.log("Received cookies: ", req.cookies );
         
     console.log("Authorization header: ", req.header("Authorization"));

     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer " , "")  

     console.log("akash token is here " , token);
     
     
     if (!token) {
         throw new ApiError(401, "Unauthorized request akash")
     }
         
     const decodeToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)

     console.log("aksh decoded token" , decodeToken);
 
     const user = await User.findById(decodeToken?._id).select("-password -refreshToken")
 
     if (!user) {
         throw new ApiError(401, "Invalid Access Token")
     }
 
     req.user = user
 
     next()

   } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
   }

})