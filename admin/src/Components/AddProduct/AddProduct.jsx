import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    if (
      !productDetails.name ||
      !productDetails.old_price ||
      !productDetails.new_price ||
      !productDetails.category ||
      !image
    ) {
      alert("All fields are mandatory. Please fill in all the details.");
      return;
    }

    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    try {
      const uploadResponse = await fetch(
        "http://localhost:4000/products/upload",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (uploadResponse.ok) {
        responseData = await uploadResponse.json();

        if (responseData.success) {
          product.image = responseData.image_url;
          console.log(product);

          const addProductResponse = await fetch(
            "http://localhost:4000/products/addproduct",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(product),
            }
          );

          if (addProductResponse.ok) {
            const addProductData = await addProductResponse.json();

            if (addProductData.success) {
              alert("Product created successfully");
            } else {
              alert("Product creation failed");
            }
          } else {
            alert("Product creation failed");
          }
        } else {
          alert("Image upload failed");
        }
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the request");
    }
  };

  return (
    <div className="add-product">
      <div className="add-product-item-field">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here.."
        />
      </div>
      <div className="add-product-price">
        <div className="add-product-item-field">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here.."
          />
        </div>
        <div className="add-product-item-field">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here.."
          />
        </div>
      </div>
      <div className="add-product-item-field">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="add-product-item-field">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="add-product-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          addProduct();
        }}
        className="add-product-btn"
      >
        Add
      </button>
    </div>
  );
};

export default AddProduct;
