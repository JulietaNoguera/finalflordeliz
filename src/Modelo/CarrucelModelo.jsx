import React from 'react';
import "./modelo.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CarrucelModelo = ({ imagenes }) => {

    const navigate = useNavigate();

  // Función que se ejecutará al hacer clic en el botón
  const handleButtonClick = (id) => {
    // Navega a la ruta deseada
    navigate(`../SeccionVista/${id}`);
  };

  return (
    <>
    <h3> Bienvenidos</h3>
    <Container className="container">
      <Row className="carruRow">
        {imagenes.map((imagen) => (
          <Col key={imagen.id} xs={12} md={3} lg={4}>
            <Card className="card-margin">
              <Card.Img
                variant="top"
                src={imagen.url}
                alt={`imagen ${imagen.id}`}
                className="img-fluid carruImg"
              />
              <Card.Body>
                <Card.Title>{imagen.title}</Card.Title>
                <Card.Text>{imagen.description}</Card.Text>
                <Button variant="primary"onClick={() => handleButtonClick(imagen.id)}>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>
      </>
  );
};

export default CarrucelModelo;
