import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MostrarCarrito from './MostrarCarrito';
import { Col, Container, Row } from 'react-bootstrap';



const RecuadroFlor = ({ imagenes, eleccion }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProd, setContadorProd] = useState(1);


  const calcularNuevoIndice = () => {
    for (let i = 0; i < imagenes.length; i++) {
      const imagen = imagenes[i];

      if (
        imagen.cantidad === eleccion.cantidad &&
        imagen.color === eleccion.colorFlor &&
        imagen.colorLazo === eleccion.colorLazo
      ) {
        return i;
      }
    }

    return 0;
  };

  useEffect(() => {
    const nuevoIndice = calcularNuevoIndice();
    setIndiceImagen(nuevoIndice);
  }, [eleccion]);

  const imagenActual = imagenes[indiceImagen];

  const agregarProducto = () => {
    const productoExistente = productos.find(
      (producto) => producto.id === imagenActual.id
    );

    if (productoExistente) {
      // Si el producto ya existe, actualiza su propiedad seleccionado
      setProductos((prevProductos) =>
        prevProductos.map((producto) =>
          producto === productoExistente
            ? { ...producto, seleccionado: producto.seleccionado + 1 }
            : producto
        )
      );
    } else {
      // Si el producto no existe, agrégalo al array
      setProductos((prevProductos) => [
        ...prevProductos,
        { ...imagenActual, seleccionado: 1 },
      ]);
    }

    setContadorProd(contadorProd + 1);
    // Calcular el total sumando la cantidad de todos los productos seleccionados
    const nuevoTotal = productos.reduce((total, producto) => total + producto.seleccionado, 0);
    setTotal(nuevoTotal);
  };

  return (
    <>
      <Container className="container">
        <Row className="eleccionRow">
          <Col md={4} xs={12}>
            <MostrarCarrito productos={productos} setProductos={setProductos} ></MostrarCarrito>
          </Col>
          <Col md={8} xs={12}>
            <Card style={{ width: '100%', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={imagenActual?.url}
                alt={`imagen ${imagenActual?.id}`}
              //className="img-fluid carruImg"
              />
              <Card.Body className='carruBody'>
                <Card.Title>{imagenActual?.title}</Card.Title>
                <Card.Subtitle>$ {imagenActual?.precio}</Card.Subtitle>
                <Button className='botonPri' size="sm" variant="primary" onClick={agregarProducto}>
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>






    </>
  );
};

export default RecuadroFlor;
