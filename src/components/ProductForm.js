import React, { useState } from "react";

const ProductForm = () => {
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission, e.g., send data to server
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-20 mb-10">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="productTitle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Title
          </label>
          <input
            type="text"
            id="productTitle"
            className="w-full px-3 py-2 border rounded"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            className="w-full px-3 py-2 border rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ratings"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ratings (1-5)
          </label>
          <input
            type="number"
            id="ratings"
            className="w-full px-3 py-2 border rounded"
            min="1"
            max="5"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="children">Children</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            className="w-full px-3 py-2 border rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
