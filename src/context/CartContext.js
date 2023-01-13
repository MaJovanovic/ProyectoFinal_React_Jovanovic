import { createContext } from "react";

const CartContext = createContext({
  user : {},
  cart: [],
  cartCounter: 10,
  addToCart: () => {},
});

export default CartContext;