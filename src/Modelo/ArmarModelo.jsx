import React from 'react'
import { useState } from 'react';
import RecuadroFlor from '../Contolador/RecuadroFlor';
import EleccionFlor from '../Contolador/EleccionFlor';
import { Container, Row, Col } from 'react-bootstrap';

const ArmarModelo = ({ imagenes, cantidad, colorFlor, colorLazo }) => {
  const [eleccion, setEleccion] = useState({
    cantidad: cantidad[0],
    colorFlor: colorFlor[0],
    colorLazo: colorLazo[0],
  });

  const handleEleccion = (nuevaEleccion) => {
    setEleccion(nuevaEleccion);
  };

  return (
    <>
    <div className='armarRamo'>
      <h3>Arma tu diseño</h3>
      <p>Aquí es donde la creatividad y la personalización se unen para crear ramos únicos que reflejan tu estilo
         y emociones. Sumérgete en nuestro catálogo de flores frescas y vibrantes, y da rienda suelta a tu imaginación 
         para diseñar el ramo perfecto.</p>
      <h5> ¡Comienza a diseñar y lleva contigo la frescura y elegancia de Flor de Lis!</h5>
      <Container className="container">
        <Row className="eleccionRow">
          <Col md={7} xs={12}>
          <RecuadroFlor imagenes={imagenes} eleccion={eleccion} />
          </Col>
    
          <Col md={5} xs={12}>
            <EleccionFlor
              cantidad={cantidad}
              colorFlor={colorFlor}
              colorLazo={colorLazo}
              onEleccion={handleEleccion}
            />
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default ArmarModelo;
