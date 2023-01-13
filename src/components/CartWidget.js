
import React from 'react';
import { useState, useEffect , useContext} from 'react';
import CartContext from '../context/CartContext';
import { Button } from 'react-bootstrap';
import CartModal from './CartModal';
import {Link } from 'react-router-dom'


const CartWidget = () => {


   const [isOpen, setIsOpen] = useState(false);
   

   const data = useContext(CartContext)
   const [t, setT] = useState(data.counter)

   
   const checkOut = ()=> {
        console.log("Check Out...")
        console.log("Context: ", data)
        
    }
 //         <img src= "/carrito.png" alt="Carro" width="50" height="30" onClick={() => setIsOpen(true)}/>  
 //<img src= "/carrito.png" alt="Carro" width="50" height="30" onClick={() => setIsOpen(true)}/> 
    return(
       // <div>{cantidadItems}</div>
       <div>
        <div className= "align-item-center">
        <img src= "/carrito.png" alt="Carro" width="50" height="30" onClick={() => setIsOpen(true)}/>
        
        {isOpen && <CartModal setIsOpen={setIsOpen} />}
        <Link to={"/pagar"}><Button variant="success" >Check-Out</Button>{' '}</Link>
        </div>
        <div>{data.cartCounter}</div>
       </div>
                
    )
        
}

export default CartWidget;