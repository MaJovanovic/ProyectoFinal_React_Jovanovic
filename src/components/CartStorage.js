import React, { useState, useEffect } from 'react';
import CartWidget from './CartWidget';

function CartStorage(props) {
  // Create a state variable to keep track of the cart items
  const [items, setItems] = useState([]);
  const [cantidadItems, setCantidadItems] = useState(0)

  // Function to add an item to the cart
  const addItem = (item) => {
    setItems([...items, item]);
    setCantidadItems(cantidadItems+1)
    
  }


    // Use the useEffect hook to retrieve the cart data from localStorage
  // when the component first renders
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    const storedCantidad = localStorage.getItem('cantidadItems')
    console.log("2")
    console.log(storedItems)
    if (storedItems) {
      setItems(storedItems);
      setCantidadItems(parseInt(storedCantidad));
    }
  }, []);

  // Use the useEffect hook to persist the cart data to localStorage
  useEffect(() => {
    // Store the cart items in localStorage when the items state variable changes
    console.log("1")
    localStorage.setItem('cartItems', JSON.stringify(items));
    localStorage.setItem('cantidadItems', cantidadItems)
  }, [items]);



  return (
    <div>
            <button onClick={() => addItem(props.product)}>Agregar</button>
            
            
    </div>
  );
}

export default CartStorage;
// The rest of the code can be the same
