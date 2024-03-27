import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../reduex/Cartslice"; // Assuming correct path to the CartSlice file

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(remove(id)); // Dispatching the remove action with the product ID as payload
  };

  return (
    <div className="flex-row justify-center items-center mx-72 bg-blue-200">
      {cartItems.map((product) => (
        <div key={product.id} className="flex my-10 items-center justify-start gap-x-56">
          <img src={product.image} alt={product.title} className="h-[100px]" style={{ backgroundColor: 'blue' }} />
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
          <button onClick={() => handleClick(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
