const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const connectToDataBase = require("./db/connectToDataBase");
const morgan = require("morgan");
const morganFunction = require("./util/morganLogger");
const cors = require("cors");
const passport = require("passport");
require("./controller/google_auth");

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const productRoute = require("./routes/productRoute");
const google_auth = require("./routes/google_auth");
const payment = require("./routes/payment");
const stripeWebHook = require("./routes/webhook");

//verify .env.Node_ENV is present and load the .env  file accordingly

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//using cookie-session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],

    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

//using morgan

app.use(morgan(morganFunction));
//using parser
app.use("/payment", stripeWebHook);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//connect to the data base
connectToDataBase();
// simple get method
app.use("/user", userRoute);
app.use("/orders", orderRoute);
app.use("/api/products/categories", categoriesRoute);
app.use("/api/products", productRoute);
app.use("/auth", google_auth);
app.use("/payment", payment);
app.use(
  "/uploads/images/gallery",
  express.static(__dirname + "/uploads/images/gallery/")
);
app.use(
  "/uploads/images/thumbnails",
  express.static(__dirname + "/uploads/images/thumbnails/")
);
//passport-js setup
app.use(passport.initialize());
app.use(passport.session());

//run the server
app.listen(process.env.PORT, () =>
  console.log("server run on port " + process.env.PORT)
);
