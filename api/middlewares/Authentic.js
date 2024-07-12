const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Adjust the path as necessary

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "mrbutton2024"); // Ensure this matches your secret key
    const user = await User.findById(decoded.id);

    console.log("Token:", token);
    console.log("Decoded:", decoded);
    console.log("User:", user);
    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Please authenticate." });
  }
};
