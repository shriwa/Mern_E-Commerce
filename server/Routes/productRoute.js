const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController");
const upload = require("../Middleware/upload");

router.post("/addproduct", productController.addProduct);
router.put("/updateproduct/:id", productController.updateProduct);
router.post("/removeproduct", productController.removeProduct);
router.get("/allproducts", productController.getAllProducts);
router.get("/newcollections", productController.getNewCollections);
router.get("/popularinwomen", productController.getPopularInWomen);
router.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:4000/images/${req.file.filename}`,
  });
});

module.exports = router;
