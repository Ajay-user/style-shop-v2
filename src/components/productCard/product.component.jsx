import { useContext } from "react";

// style
import "./product.style.scss";

import CustomButton from "../customButton/customButton.component";

import { CartContext } from "../../context/cartContext";

const ProductCard = ({ id, name, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext);
  const addItemToCart = () => addToCart({ id, name, price, imageUrl });
  return (
    <div className="product-card">
      <div className="product-card__image--container">
        <img
          src={imageUrl}
          alt={name}
          className="product-card__image--img"
        ></img>
      </div>
      <div className="product-card__details">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div className="add-to-cart">
        <CustomButton
          name="Add to cart 🛒"
          type="button"
          customClass="cart"
          onClickHandler={addItemToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
