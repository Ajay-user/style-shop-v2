import { useContext } from "react";
// style
import "./checkout.styles.scss";

import CheckoutGrid from "../../components/checkout-grid/checkout-grid.component";

import { CartContext } from "../../context/cartContext";

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout__header">
        <h1 className="checkout__header--title">Your Cart 🛒</h1>
      </div>

      <div className="checkout__main">
        <div className="checkout-grid grid__title">
          <span className="checkout-grid__cell">Product</span>
          <span className="checkout-grid__cell">Description</span>
          <span className="checkout-grid__cell">Quantity</span>
          <span className="checkout-grid__cell">Price</span>
          <span className="checkout-grid__cell">Delete</span>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => <CheckoutGrid item={item} key={item.id} />)
        ) : (
          <h2 className="checkout--empty-cart">Your cart is empty </h2>
        )}
      </div>

      <div className="checkout__footer">
        <h2 className="checkout__footer--total-amout">Total:${cartTotal}</h2>
      </div>
    </div>
  );
};

export default Checkout;
