import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  displayCart: null,
  setDisplayCart: () => null,
  cartItems: null,
  addToCart: () => null,
  removeFromCart: () => null,
  deleteCartItem: () => null,
  cartQuantity: null,
  cartTotal: null,
});

// adds new item to the cart
const addItemToCart = (cartItems, newItem) => {
  // is newItem exist
  const index = cartItems.find((item) => item.id === newItem.id);

  // if newItem exist
  if (index) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  // if newItem doesn't exist
  return [...cartItems, { ...newItem, quantity: 1 }];
};

// Delete from cart
const deleteItemFromCart = (cartItems, cartItemToDelete) =>
  cartItems.filter((item) => item.id !== cartItemToDelete.id);

// Decrement the product
const removeItemFomCart = (cartItems, cartItemToRemove) => {
  // if the quantity is 1 delete it from cart else decrement the quantity
  if (cartItemToRemove.quantity === 1) {
    return deleteItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // util for adding to cart
  const addToCart = (newItem) => {
    const cart = addItemToCart(cartItems, newItem);
    setCartItems(cart);
  };
  // util for removing from cart
  const removeFromCart = (itemToRemove) => {
    const cart = removeItemFomCart(cartItems, itemToRemove);
    setCartItems(cart);
  };

  // util for deleting cart item
  const deleteCartItem = (itemToDelete) => {
    const cart = deleteItemFromCart(cartItems, itemToDelete);
    setCartItems(cart);
  };

  // update cartQuantity
  useEffect(() => {
    const quantity = cartItems.reduce((acc, curr) => (acc += curr.quantity), 0);
    setCartQuantity(quantity);
  }, [cartItems]);

  // update total amount
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, curr) => (acc += curr.price * curr.quantity),
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    displayCart,
    setDisplayCart,
    cartItems,
    addToCart,
    removeFromCart,
    deleteCartItem,
    cartQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// export const CartProvider = ({ children }) => {
//   const [displayCart, setDisplayCart] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartQuantity, setCartQuantity] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   const setCartAndQuantity = (updateCart, updatedQuantity, updatedTotal) => {
//     setCartItems(updateCart);
//     setCartQuantity(updatedQuantity);
//     setCartTotal(updatedTotal);
//   };

//   // util for adding to cart
//   const addToCart = (newItem) => {
//     const cart = addItemToCart(cartItems, newItem);
//     const newCartQuantity = cartQuantity + 1;
//     const newCartTotal = cartTotal + newItem.price;
//     setCartAndQuantity(cart, newCartQuantity, newCartTotal);
//   };
//   // util for removing from cart
//   const removeFromCart = (itemToRemove) => {
//     const cart = removeItemFomCart(cartItems, itemToRemove);
//     const newCartQuantity = cartQuantity - 1;
//     const newCartTotal = cartTotal - itemToRemove.price;
//     setCartAndQuantity(cart, newCartQuantity, newCartTotal);
//   };

//   // util for deleting cart item
//   const deleteCartItem = (itemToDelete) => {
//     const cart = deleteItemFromCart(cartItems, itemToDelete);
//     const newCartQuantity = cartQuantity - itemToDelete.quantity;
//     const newCartTotal = cartTotal - itemToDelete.price * itemToDelete.quantity;
//     setCartAndQuantity(cart, newCartQuantity, newCartTotal);
//   };

//   const value = {
//     displayCart,
//     setDisplayCart,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     deleteCartItem,
//     cartQuantity,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
