import { useContext } from "react";

import "./cartIcon.styles.scss";
import { CartContext } from "../../context/cartContext";

const CartIcon = () => {
  const { displayCart, setDisplayCart, cartQuantity } = useContext(CartContext);
  const toggleCartDisplay = () => setDisplayCart(!displayCart);

  return (
    <div className="cart-icon-container nav__link" onClick={toggleCartDisplay}>
      <span className="cart-item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
