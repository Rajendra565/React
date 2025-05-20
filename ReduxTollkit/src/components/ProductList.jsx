// src/components/ProductList.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button
            onClick={() => dispatch(addToCart(product))}
            style={{ marginLeft: 10 }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
