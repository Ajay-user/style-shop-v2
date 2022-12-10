import { useState, createContext } from "react";

export const CartContext = createContext({
  displayCart: null,
  setDisplayCart: () => null,
  cartItems: null,
  addToCart: () => null,
  cartQuantity: null,
});

// adds new item to the cart
const addItemToCart = (cartItems, newItem) => {
  // is newItem exist
  const index = cartItems.findIndex((item) => item.id === newItem.id);

  // if newItem exist
  if (index !== -1) {
    const cart = cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    return [cart, cart[index].quantity];
  }

  // if newItem doesn't exist return cart and quantity
  return [[...cartItems, { ...newItem, quantity: 1 }], 1];
};

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  // util for adding to cart
  const addToCart = (newItem) => {
    const [cart, quantity] = addItemToCart(cartItems, newItem);
    const newCartQuantity = cartQuantity + quantity;
    setCartItems(cart);
    setCartQuantity(newCartQuantity);
  };

  const value = {
    displayCart,
    setDisplayCart,
    cartItems,
    addToCart,
    cartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
