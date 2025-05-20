// src/components/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Feactures/card/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ margin: "10px 0" }}>
            <span>
              {item.name} - ₹{item.price}
            </span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ marginLeft: 10 }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
