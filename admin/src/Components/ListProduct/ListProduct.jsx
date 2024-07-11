import React, { useEffect, useState } from "react";
import UpdateProduct from "../UpdateProduct";
import { getAllProducts, removeProduct } from "../../API/products";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [error, setError] = useState();

  const fetchInfo = async () => {
    try {
      const products = await getAllProducts();
      setAllproducts(products);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleRemoveProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await removeProduct(id);
        fetchInfo();
      } catch (error) {
        console.error("Error removing product:", error);
      }
    }
  };

  const handleUpdateProduct = (updatedProduct) => {
    fetchInfo();
    setAllproducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <div className="overflow-x-hidden mt-24 w-full shadow-md sm:rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Product List
            </h3>
          </div>
          {error && <h4>{error}</h4>}
          <div className="border-t border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {allproducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt={product.name}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-2 dark:text-gray-400">
                            {product.category}
                          </div>
                          <div>
                            <div className="text-sm text-black mt-2 dark:text-gray-400">
                              Offer Price : {product.new_price}
                            </div>
                            <div className="text-sm text-black mt-2 dark:text-gray-400">
                              Old Price : {product.old_price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row items-center sm:gap-4 gap-5">
                        <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="inline-flex gap-2 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          Delete
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="red"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <UpdateProduct
                          userData={product}
                          onUpdateProduct={handleUpdateProduct}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
