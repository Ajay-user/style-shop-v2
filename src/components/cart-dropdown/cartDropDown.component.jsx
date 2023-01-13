import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cartDropDown.styles.scss";
import CustomButton from "../customButton/customButton.component";

import { CartContext } from "../../context/cartContext";

const CartDropDown = () => {
  const { displayCart, setDisplayCart, cartItems } = useContext(CartContext);

  const toggleCartDisplay = () => setDisplayCart(!displayCart);

  // navigation hook
  const navigateToCheckout = useNavigate();
  const goToCheckout = () => {
    toggleCartDisplay();
    navigateToCheckout("/checkout");
  };

  return (
    <div className="cart-drop-down-container">
      <div className="cart-drop-down-header">
        <h1>My cart 🛒</h1>
        <span
          className="cart-drop-down-header--toggle"
          onClick={toggleCartDisplay}
        >
          ❌
        </span>
      </div>

      <ul className="drop-down-list">
        {cartItems.length === 0 ? (
          <div className="drop-down-list__empty">
            <h2>Your cart is Empty</h2>
          </div>
        ) : (
          cartItems.map((item) => (
            <li className="drop-down-list__item" key={item.id}>
              <div className="drop-down-list__item--image-container">
                <img
                  className="drop-down-list__item--image"
                  src={item.imageUrl}
                  alt="product"
                />
              </div>

              <div className="drop-down-list__item--box">
                <h3 className="drop-down-list__item--name">{item.name}</h3>
                <div className="drop-down-list__item--details">
                  <span className="drop-down-list__item--price">
                    ${item.price}
                  </span>
                  <span className="drop-down-list__item--quantity">
                    x {item.quantity}
                  </span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className="cart-button">
        <CustomButton
          name="CHECKOUT"
          type="button"
          onClickHandler={goToCheckout}
        />
      </div>
    </div>
  );
};

export default CartDropDown;
