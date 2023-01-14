import { createContext } from "react";

const CartContext = createContext({
  user : {},
  cart: [],
  cartCounter: 0,
  addToCart: () => {},
});

export default CartContext;
