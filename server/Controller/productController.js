const Product = require("../Models/Product");

exports.addProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    await product.save();
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to add product" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, image, category, new_price, old_price } = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId },
      { name, image, category, new_price, old_price },
      { new: true }
    );

    if (updatedProduct) {
      res.json({ success: true, product: updatedProduct });
    } else {
      res.status(404).json({ success: false, error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to update product" });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to remove product" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.send(products);
    console.log("Products Fetched");
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch products" });
  }
};

exports.getNewCollections = async (req, res) => {
  try {
    let products = await Product.find({});
    let newcollections = products.slice(-8);
    res.send(newcollections);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch new collections" });
  }
};

exports.getPopularInWomen = async (req, res) => {
  try {
    let products = await Product.find({
      category: "women",
    });
    let popularinwomen = products.slice(0, 4);
    res.send(popularinwomen);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch popular products in women",
    });
  }
};
