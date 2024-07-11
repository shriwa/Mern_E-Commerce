const Product = require("../Models/Product");

exports.addProduct = async (req, res) => {
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
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
  });
};

exports.getAllProducts = async (req, res) => {
  let products = await Product.find({});
  res.send(products);
  console.log("Products Fetched");
};

exports.getNewCollections = async (req, res) => {
  let products = await Product.find({});
  let newcollections = products.slice(1).slice(-8);
  res.send(newcollections);
};

exports.getPopularInWomen = async (req, res) => {
  let products = await Product.find({
    category: "women",
  });
  let popularinwomen = products.slice(0, 4);
  res.send(popularinwomen);
};
