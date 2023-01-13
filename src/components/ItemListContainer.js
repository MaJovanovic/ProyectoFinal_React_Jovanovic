import React, { useEffect, useState, useContext } from 'react';


import Item from './Item';
import catalogo from "./catalogo";
import { useParams, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
// Incluir Firebase
import { getFirestore } from 'firebase/firestore';
//import { getAllCategories } from '../queries/categories';
import { getAllProducts ,getProductsByCategory} from '../queries/productos';




function ItemListContainer () {
  const [productos, setProductos] = useState([]);


  const {categoria}= useParams()
  
  //const [items, setItems]= useState([])
  const db = getFirestore();
  useEffect(() => {
    if (categoria) {
      
      getProductsByCategory(db, categoria)
      .then((item) => {
        
        setProductos(item)

      })
      console.log(productos)

    } else {
      getAllProducts(db)
      .then((item) => {
        setProductos(item)

      })

    }
      
    

  }, [categoria]);

  const renderProducts = () => (
    productos?.map(item => (

        
        <div className="card-style card card-group" key={item.id} style={{width: "18rem", display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
                              
        <img src={item.imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h2>{item.codigo}</h2>
          <h2>{item.descripcion}</h2>
          <Link  to = {`/item/${item.id}`}> <Button variant="primary"> Ver Detalle </Button>  </Link>
        </div>     

        </div>  
    ))
  )

  return (
    <div>
      <React.Fragment>
      <h1>{categoria}</h1>
      <div>
        {renderProducts()} 
      </div>
      </React.Fragment>
    </div>
      
  );
}



export default ItemListContainer;