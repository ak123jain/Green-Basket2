import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin :  process.env.CORS_ORIGIN, 
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

// import routes

import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

app.use('/user', userRoutes)
app.use('/product', productRoutes)

// http://localhost:8000/user/ user routes ka andar jo method ha vo
export {  app }