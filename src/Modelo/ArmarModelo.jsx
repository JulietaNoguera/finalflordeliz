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
      <Container className="container">
        <Row className="eleccionRow">
          <Col md={4} xs={12}>
          <RecuadroFlor imagenes={imagenes} eleccion={eleccion} />
          </Col>
    
          <Col md={8} xs={12}>
            <EleccionFlor
              cantidad={cantidad}
              colorFlor={colorFlor}
              colorLazo={colorLazo}
              onEleccion={handleEleccion}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArmarModelo;
