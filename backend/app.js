require("dotenv").config()




const express = require("express")
const connectDB = require("./db/connect")
const passport = require('passport')
require('./controllers/google_auth')


const cors = require('cors')
const app = express()
const port = 5000

app.use(express.json())

const cookieSession = require("cookie-session")
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
  
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))




const categories = require("./routes/categories")
app.use("/api/products/categories",categories)





const products = require("./routes/products")
app.use("/api/products",products)
app.use('/uploads/images/gallery',express.static(__dirname +'/uploads/images/gallery/' ))
app.use('/uploads/images/thumbnails',express.static(__dirname +'/uploads/images/thumbnails/' ))
const google_auth = require("./routes/google_auth")
app.use("/auth",google_auth)

app.use(passport.initialize())
app.use(passport.session())


const notFoundMiddleware = require('./middleware/not-found');
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
