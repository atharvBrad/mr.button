const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

const User = require("./models/user");

const app = express();
const port = 5000;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded());

mongoose
  .connect(
    "mongodb+srv://atharv:AtharvBrad@cluster0.lmx3gz5.mongodb.net/mr_button"
  )
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

const productRouter = require("./routes/products");
const authRouter = require("./routes/auth");
// const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const userRouter = require("./routes/user");

app.use("/api/products", productRouter);
app.use("/api/", authRouter);
// app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(port, () => {
  console.log("Server running on 5000");
});
