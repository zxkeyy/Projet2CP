const express = require("express");
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
const messageRoute = require("./routes/messageRoute");
const http = require("http");
const { initSocketServer } = require("./socket");

dotenv.config({ path: path.join(__dirname, "config", ".env") });

const app = express();
const server = http.createServer(app);
const io = initSocketServer(server);

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"], // Ensure this matches your frontend URL
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "uploads")));
app.use(morgan(morganFunction));

app.use((req, res, next) => {
  res.io = io;
  next();
});

app.use("/user", userRoute);
app.use("/orders", orderRoute);
app.use("/message", messageRoute);
app.use("/api/products/categories", categoriesRoute);
app.use("/api/products", productRoute);

connectToDataBase();

server.listen(process.env.PORT, () => {
  console.log("server run on port " + process.env.PORT);
});
