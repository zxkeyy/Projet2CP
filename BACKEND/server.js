const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectToDataBase = require("./db/connectToDataBase");
const morgan = require("morgan");
const morganFunction = require("./util/morganLogger");

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

//connect to the data base
connectToDataBase();
// simple get method
app.use("/user", userRoute);

//run the server
app.listen(process.env.PORT, () =>
  console.log("server run on port " + process.env.PORT)
);
