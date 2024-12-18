import mongoose , {Schema} from "mongoose";
import bcrypt from  "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    adress: {
        type : String,
        required : false 
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    refreshToken: {
      type: String
  }

     
},{timestamps: true})

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  
  next()
})

userSchema.methods.isPasswordCorrect = async function (password){

  console.log("hashed password " , this.password);
console.log("password in the database" , password);


   const ans = await bcrypt.compare(password , this.password)
   console.log("password hashed" , ans);
   return ans
}

userSchema.methods.generateAccessToken = function (){
    return  jwt.sign(
        
     {
        _id : this._id,
        username : this.username,
        email : this.email
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}

userSchema.methods.generateRefreshToken = function (){
    return  jwt.sign(
        
     {
        _id : this._id,
        
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}
 

export const User = mongoose.model("User" , userSchema)


 
