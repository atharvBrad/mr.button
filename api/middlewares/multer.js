// multer.js

const multer = require("multer");
const { storage } = require("../utils/cloudinaryConfig");

// Create the Multer instance with Cloudinary storage
const upload = multer({ storage: storage });

module.exports = upload;
