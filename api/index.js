const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("./models/user");

const app = express();
const port = 5000;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://atharv:AtharvBrad@cluster0.lmx3gz5.mongodb.net/mr_button"
  )
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });

// User registration endpoint
// app.post("/register", async (req, res) => {
//   try {
//     const { firstName, lastName, emailId, password } = req.body;
//     const newUser = new User({ firstName, lastName, emailId, password });

//     await newUser.save();

//     res.send("data entered");
//   } catch (error) {
//     console.log("Error Creating User", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
//   // // Basic validation
//   // if (!firstName || !lastName || !emailId || !password) {
//   //   return res.status(400).json({ message: "All fields are required" });
//   // }

//   // // Check if user already exists
//   // const existingUser = await User.findOne({ emailId });
//   // if (existingUser) {
//   //   return res.status(400).json({ message: "Email already in use" });
//   // }

//   // Hash the password
//   // const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user
//   // const newUser = new User({
//   //   firstName,
//   //   lastName,
//   //   email,
//   //   password: hashedPassword,
//   // });
// });

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName || !emailId || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create new user
    const newUser = new User({ firstName, lastName, emailId, password });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error Creating User", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server running on 5000");
});
