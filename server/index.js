const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(
  "mongodb+srv://shriwarthan:12345@cluster0.8knbjar.mongodb.net/e-commerce",
  console.log("Successfully connected to MongoDB")
);

// Routes
const productRoutes = require("./Routes/productRoute");
const userRoutes = require("./Routes/userRoute");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/images", express.static(path.join(__dirname, "upload/images")));

app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
