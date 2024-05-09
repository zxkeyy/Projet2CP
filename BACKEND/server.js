const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectToDataBase = require("./db/connectToDataBase");
const morgan = require("morgan");
const morganFunction = require("./util/morganLogger");
const jwt = require('jsonwebtoken');


app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  credentials: true, // Allow credentials
}));

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
//verify .env.Node_ENV is present and load the .env  file accordingly
if (process.env.Node_ENV !== "PRODUCTION") {
  const envPath = path.join(__dirname, "config", ".env");
  dotenv.config({ path: envPath });
}
//using morgan

app.use(morgan(morganFunction));
//using parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const jwtAuthentication = (req, res, next) => {
  // Assuming your JWT is stored in a cookie named 'authToken'
  const token = req.cookies.jwt; 

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, no token provided' });
  }
  
console.log(token);
  try {
    const decoded = jwt.decode(token); // Verify the JWT
    req.user = decoded; // Set the decoded JWT payload to `req.user`
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized, invalid token' });
  }
};

app.use(jwtAuthentication); 
//connect to the data base
connectToDataBase();
// simple get method
app.use("/user", userRoute);
// Use the JWT authentication middleware

//run the server
app.listen(process.env.PORT, () =>
  console.log("server run on port " + process.env.PORT)
);
