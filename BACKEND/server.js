const express = require("express");
const app = express();
require("dotenv").config();
const dotenv = require("dotenv");
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

const messageRoute = require("./routes/messageRoute");
const http = require("http");
const { initSocketServer } = require("./socket");

//verify .env.Node_ENV is present and load the .env  file accordingly

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Ensure this matches your frontend URL
    credentials: true,
  })
);

const server = http.createServer(app);
const io = initSocketServer(server);

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(morganFunction));

app.use((req, res, next) => {
  res.io = io;
  next();
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//connect to the data base
connectToDataBase();
// simple get method
app.use("/user", userRoute);
app.use("/orders", orderRoute);
app.use("/message", messageRoute);
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
server.listen(process.env.PORT, () => {
  console.log("server run on port " + process.env.PORT);
});
