import API from ".";

// Get all products
export const getAllProducts = async () => {
  try {
    const res = await API.get("/products/allproducts");
    return res.data;
  } catch (error) {
    console.error("Fetching all products failed", error);
    throw error;
  }
};

// add a product
export const addProduct = async (productData) => {
  try {
    const res = await API.post("/products/addproduct", productData);
    return res.data;
  } catch (error) {
    console.error("Adding product failed", error);
    throw error;
  }
};

// Remove a product
export const removeProduct = async (id) => {
  try {
    const res = await API.post("/products/removeproduct", { id });
    return res.data;
  } catch (error) {
    console.error("Removing product failed", error);
    throw error;
  }
};
