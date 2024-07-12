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
app.use(express.json());
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
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const addressRoutes = require("./routes/addressRoutes");

app.use("/api/products", productRouter);
app.use("/api/", authRouter);
// app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);
app.use("/wishlist", wishlistRoutes);
app.use("/api", reviewRoutes);
app.use("/api", addressRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(port, () => {
  console.log("Server running on 5000");
});

// const mongoose = require("mongoose");
// const csv = require("csv-parser");
// const fs = require("fs");
// const Product = require("./models/Product");

// mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

// const results = [];

// fs.createReadStream('path_to_your_csv_file.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     const product = {
//       handle: data['Handle'],
//       title: data['Title'],
//       bodyHtml: data['Body (HTML)'],
//       vendor: data['Vendor'],
//       productCategory: data['Product Category'],
//       type: data['Type'],
//       tags: data['Tags'] ? data['Tags'].split(',') : [],
//       published: data['Published'] === 'True',
//       options: [
//         { name: data['Option1 Name'], value: data['Option1 Value'] },
//         { name: data['Option2 Name'], value: data['Option2 Value'] },
//         { name: data['Option3 Name'], value: data['Option3 Value'] }
//       ].filter(option => option.name),
//       variant: {
//         sku: data['Variant SKU'],
//         grams: data['Variant Grams'],
//         inventoryTracker: data['Variant Inventory Tracker'],
//         inventoryQty: data['Variant Inventory Qty'],
//         inventoryPolicy: data['Variant Inventory Policy'],
//         fulfillmentService: data['Variant Fulfillment Service'],
//         price: data['Variant Price'],
//         compareAtPrice: data['Variant Compare At Price'],
//         requiresShipping: data['Variant Requires Shipping'] === 'True',
//         taxable: data['Variant Taxable'] === 'True',
//         barcode: data['Variant Barcode'],
//       },
//       images: [
//         {
//           src: data['Image Src'],
//           position: data['Image Position'],
//           altText: data['Image Alt Text'],
//         }
//       ],
//       giftCard: data['Gift Card'] === 'True',
//     };

//     results.push(product);
//   })
//   .on('end', () => {
//     Product.insertMany(results)
//       .then(() => {
//         console.log("Data successfully loaded into MongoDB");
//         mongoose.disconnect();
//       })
//       .catch(err => {
//         console.error("Error loading data into MongoDB:", err);
//         mongoose.disconnect();
//       });
//   });
