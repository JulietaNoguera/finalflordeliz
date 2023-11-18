import React from 'react';
import './modelo.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SeccionModelo = ({ imagenes}) => {
  const navigate = useNavigate();

  // Función que se ejecutará al hacer clic en el botón
  const handleButtonClick = () => {
    // Navega a la ruta deseada
    navigate(`../ArmarVista`);
  };

  return (

    <>    
    <h3>Selecciona el ramo que mas te guste</h3>
    <Container className="contSeccion">
      <Row className='contRow'>
        {imagenes.map((imagen) => (
          <Col key={imagen.id} xs={12} md={3} lg={3}>
            <Card className="card-margin">
              <Card.Img
                variant="top"
                src={imagen.url}
                alt={`imagen ${imagen.id}`}
                
              />
              <Card.Body>
                <Card.Title>{imagen.title}</Card.Title>
                <Card.Text>{imagen.description}</Card.Text>
                <Button variant="primary" onClick={() => handleButtonClick()}>Arma tu ramo</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>

  );
};

export default SeccionModelo;
