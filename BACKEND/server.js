const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectToDataBase = require("./db/connectToDataBase");
const morgan = require("morgan");
const morganFunction = require("./util/morganLogger");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const categoriesRoute = require("./routes/categoriesSchema");
const productRoute = require("./routes/productRoute");

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
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log(origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", origin);
  next();
});

//connect to the data base
connectToDataBase();
// simple get method
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.use("/products", productRoute);
app.use("/categories", categoriesRoute);

//run the server
app.listen(process.env.PORT, () =>
  console.log("server run on port " + process.env.PORT)
);
