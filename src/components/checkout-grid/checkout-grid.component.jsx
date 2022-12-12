import { useContext } from "react";

import "./checkout-grid.styles.scss";

import { CartContext } from "../../context/cartContext";

const CheckoutGrid = ({ item }) => {
  const { addToCart, deleteCartItem, removeFromCart } = useContext(CartContext);
  const decrement = () => removeFromCart(item);
  const increment = () => addToCart(item);
  const deleteItem = () => deleteCartItem(item);
  return (
    <div className="checkout-grid grid__row">
      <div className="checkout-grid__image-container ">
        <img
          className="checkout-grid__image"
          src={item.imageUrl}
          alt="cart-item"
        />
      </div>
      <span className="checkout-grid__cell checkout--description">
        {item.name}
      </span>
      <div className="checkout-grid__cell ">
        <span
          className="checkout-grid__cell checkout--decrement"
          onClick={decrement}
        >
          ➖
        </span>
        <span className="checkout-grid__cell checkout--quantity">
          {item.quantity}
        </span>
        <span
          className="checkout-grid__cell checkout--increment"
          onClick={increment}
        >
          ➕
        </span>
      </div>
      <span className="checkout-grid__cell checkout--price">${item.price}</span>
      <span
        className="checkout-grid__cell checkout--delete-btn"
        onClick={deleteItem}
      >
        ❌
      </span>
    </div>
  );
};

export default CheckoutGrid;
