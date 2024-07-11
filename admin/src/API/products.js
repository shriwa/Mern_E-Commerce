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

export const uploadImage = async (image) => {
  try {
    let formData = new FormData();
    formData.append("product", image);

    const res = await API.post("/products/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Image upload failed", error);
    throw error;
  }
};

// add a product
export const addProduct = async (productData) => {
  try {
    const res = await API.post("/products/addproduct", productData);
    alert("Product added successfully");
    return res.data;
  } catch (error) {
    alert("Product add failed", error);
    console.error("Adding product failed", error);
    throw error;
  }
};

// Remove a product
export const removeProduct = async (id) => {
  try {
    const res = await API.post("/products/removeproduct", { id });
    alert("Product removed successfully");
    return res.data;
  } catch (error) {
    alert("Removing product failed", error);
    console.error("Removing product failed", error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (userData) => {
  try {
    const res = await API.put(
      `/products/updateproduct/${userData.id}`,
      userData
    );
    alert("Product updated successfully");
    return res.data;
  } catch (error) {
    alert("Product update failed", error);
    console.error("Updating product failed", error);
    throw error;
  }
};
