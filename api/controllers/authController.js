const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
 

  createUser: async (req, res) => {
    try {
      const { firstName, lastName, emailId, password } = req.body;

      if (!firstName || !lastName || !emailId || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const existingUser = await User.findOne({ emailId });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }

      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        "mrbutton2024"
      ).toString();

      const newUser = new User({
        firstName,
        lastName,
        emailId,
        password: encryptedPassword,
      });

      await newUser.save();

      const userToken = jwt.sign(
        {
          id: newUser.id,
        },
        "mrbutton2024",
        { expiresIn: "7d" }
      );

      // const { password: userPassword, ...userData } = newUser._doc;
      console.log("User Data Before Response:", newUser._doc);

      // res.status(201).json({ ...userData, token: userToken });
      res.status(201).json({ ...newUser._doc, token: userToken });
    } catch (error) {
      console.log("Error Creating User", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

 

  loginUser: async (req, res) => {
    try {
      const { emailId, password } = req.body;

      const user = await User.findOne({ emailId });
      if (!user) {
        return res
          .status(401)
          .json({ error: "Wrong credentials, provide a valid email" });
      }

      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        "mrbutton2024"
      );
      const decryptedpass = decryptedPassword.toString(CryptoJS.enc.Utf8);

      if (decryptedpass !== password) {
        return res.status(401).json({ error: "Wrong password" });
      }

      const userToken = jwt.sign(
        {
          id: user.id,
        },
        "mrbutton2024",
        { expiresIn: "7d" }
      );

      // Extract user data excluding password and include isAdmin
      const { password: userPassword, isAdmin, ...userData } = user._doc;

      // Include isAdmin explicitly
      res.status(200).json({ ...userData, isAdmin, token: userToken });
      console.log("Login Response Data:", {
        ...userData,
        isAdmin,
        token: userToken,
      });
    } catch (error) {
      console.log("Error Logging In User", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
