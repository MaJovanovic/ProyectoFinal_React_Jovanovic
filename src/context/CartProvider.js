import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const getUser = () => {
    return ({
      username: 'mery',
      name: 'Maria Ignacia',
      country: 'Chile'
    })
  }

  const addToCart = (product) => {
    // es un arrego y no va con {}
    setCart([...cart, product])
    setCartCounter(cartCounter+1)
  }

  return (
    <CartContext.Provider value={{
      user: getUser(),
      cart,
      cartCounter,
      addToCart: (product) => addToCart(product),
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;