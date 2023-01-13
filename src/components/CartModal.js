import React, { useState, useEffect, useContext } from 'react';
import {Modal, Button, Row, Card, Col, Container} from 'react-bootstrap';
import CartContext from '../context/CartContext';

function CartModal(props) {
    const [show, setShow] = useState(false);
    const [contenidoCarro, setContenidoCarro] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = useContext(CartContext)

    //const contenidoCarro = props.contenidoCarro
    let conta = 0
    useEffect(()=> {
        conta = props.contador
        setContenidoCarro(props.contenidoCarro)

    },[])

 
    const muestraCarro = ()=> {
        
        //console.log(contenidoCarro[0].codigo)
 /*       return contenidoCarro.map(item => (
            <React.Fragment>
            <di>{contenidoCarro}</di>
            </React.Fragment>

        ))*/
        return (<React.Fragment>
            <div>
                <h3>Cantidad de Items {data.cartCounter}</h3>
                
            </div>
            
            {data.cart.map((product) => (
                <Card>
                <Row>
                <div key={product.id}>
                    <Col xs={6} md={4}>{product.codigo}</Col>
                    <Col xs={6} md={4}>cantidad: {product.cantidad}</Col>                   
                    <Col xs={6} md={4}>descripcion: {product.descripcion}</Col>
                    <Col xs={6} md={4}>precio: {product.precio}</Col>
                </div>
                </Row>
                </Card> 
            
            ))}
              
            

            </React.Fragment>)

    }
    
// en muestraCarro influye si lo llamo con o sin (). Si se eliminan los () no invoca la función  
    return (
      <>
        
        <Button variant="warning" onClick={handleShow}>
          Ver Carro
        </Button>
        
        <Modal show={show} fullscreen={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Su Compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            
            {muestraCarro()}
          </Container> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  //render(<CartModal />);


export default CartModal;
