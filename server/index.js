require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Create express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("Connection error", err));

// Routes
const productRoutes = require("./Routes/productRoute");
const userRoutes = require("./Routes/userRoute");

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// API Routes
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
