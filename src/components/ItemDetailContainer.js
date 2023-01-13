import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { getFirestore } from 'firebase/firestore';
import { getProductById} from '../queries/productos';
import CartContext from '../context/CartContext';


function ItemDetailContainer() {
    const { id } = useParams();
    const [p, setP] = useState();
    const data = useContext(CartContext)
    let cantidad = 0
    

    useEffect(() => {
        
        const db = getFirestore();
       
        getProductById(db, id).then((item) => {
            // además de recuperar el producto y actualizar el estado, agrego el campo "cantidad"
            setP({...item, cantidad});
        }).catch(error=> console.log(error))

    }, [id]);

    useEffect(() => {
//        alert("Se agrego un producto al carrito");
        console.log(data);
      }, [data.cart])


    if (!p) {
        return <div></div>;
    }
    
    return (
        <React.Fragment>
            <div
                className="card-style card card-group"
                style={{
                    width: "18rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <img src={p.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>Código: {p.codigo}</h3>
                    <h4>Item  : {p.descripcion}</h4>
                    <h4>Precio: {p.precio}</h4>
                    <h4>Cantidad: {1}</h4>

                    <Button onClick={() => {data.addToCart(p)}}> Agregar al Carro</Button>
                    
                </div>
            </div>
            <div
                className="card-style card card-group"
                style={{
                    width: "18rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >

           </div> 
        </React.Fragment>
        
    );
}

export default ItemDetailContainer;
