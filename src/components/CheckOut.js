import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Container, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import CartContext from '../context/CartContext';
import { setOrderById} from '../queries/ordenes';
import { getFirestore } from 'firebase/firestore';


function CheckOut() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const data = useContext(CartContext)

  
  //const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({nombre:'',
                                        apellido:'',
                                        ciudad:'',
                                      estado: '',
                                      postal: '',
                                      email: ''
                                    }
                                      
                                      );

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log("OC procesada")
    console.log("formulario: ",formData)

    // agregar todos los productos y juntarlo con los datos del cliente
    console.log("Carro: ",data.cart)
    let orden = formData

    let ordenItems = 
    data.cart.map((product) => (
        {
          codigo: product.codigo,
        cantidad: product.cantidad  ,                
        descripcion: product.descripcion,
        precio: product.precio
      }        
    ));
  
    // se junta en encabezado de la orden con los productos
    orden = {...orden, ordenItems}
  
    console.log("LA ORDEN:", orden)
    // guardar la Orden en Firebase
    const db = getFirestore();
    const oc = setOrderById(db, orden, null)
      .then((tempId)=> {
        //console.log(tempId)
        return tempId
    })
    .catch((error) => {
      return null
    })

    let ocOk = ''
     oc.then((tempId)=> { ocOk = tempId})
    
     //console.log("OcOk:    ", ocOk) 

   ocOk = true
    // true por el momento
    navigate('/gracias', {replace: true})
  };

  const handleOnchange = (event)=> {
    event.persist()
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  let q = 0;
  return (
    <Container>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            
            value={formData.nombre} name= "nombre" onChange={handleOnchange}
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            
            value={formData.apellido} name= "apellido" onChange={handleOnchange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required value={formData.ciudad} name= "ciudad" onChange={handleOnchange}/>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese la ciudad.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" placeholder="Estado" required value={formData.estado} name= "estado" onChange={handleOnchange}/>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el estado.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="Codigo Postal" required value={formData.postal} name= "postal" onChange={handleOnchange}/>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese codigo postal.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              value={formData.email} name= "email" onChange={handleOnchange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Repita Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese Email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Estoy de acuerdo con los términos y condiciones"
          feedback="Debe estar de acuerdo para procesar la orden"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    
    {
    data.cart.map((product) => (
      
                <Card>
                <Row>
                <div key={product.id}>
                    <Col xs={6} md={4}>{product.codigo}</Col>
                    <Col xs={6} md={4}>cantidad: {'1'}</Col>                   
                    <Col xs={6} md={4}>descripcion: {product.descripcion}</Col>
                    <Col xs={6} md={4}>precio: {product.precio}</Col>
                </div>
                </Row>
                </Card> 
            
            ))
            
    }
     

    </Container>
  );
}

export default CheckOut;
