require("dotenv").config()
require('express-async-errors');



const express = require("express")
const connectDB = require("./db/connect")
const cors = require('cors')
const app = express()

const notFoundMiddleware = require('./middleware/not-found');
app.use(cors())

const port = 5000
app.use(express.json())

const categories = require("./routes/categories")
app.use("/api/products/categories",categories)

const products = require("./routes/products")
app.use("/api/products",products)


app.use(notFoundMiddleware);



const  start = async ()=>{
    try {  
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}

start()