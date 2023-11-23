import React from 'react';
import "../modelo.css";
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
      <div className='presentacion'>
        <h3>¡Bienvenido a Flor de Lis!</h3>
        <p>En nuestro rincón floral, celebramos la belleza efímera de las flores y la alegría que traen a cada momento especial. Nos complace recibirte en nuestro jardín virtual, donde cada pétalo cuenta una historia única.

          <br />Descubre la frescura y elegancia de nuestras creaciones florales cuidadosamente elaboradas. Desde encantadores ramos hasta arreglos personalizados, cada flor refleja nuestro compromiso con la calidad y la creatividad.</p>


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
                  <Card.Body className="carruBody">
                    <Card.Title>{imagen.title}</Card.Title>
                    <Card.Text>{imagen.description}</Card.Text>
                    <Button className="botonPri" variant="primary" size="sm" onClick={() => handleButtonClick(imagen.id)}>Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CarrucelModelo;
