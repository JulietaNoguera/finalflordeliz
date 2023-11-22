import React, { useState, useEffect } from 'react';
import { Button, Card,  Col,  Container, Row } from 'react-bootstrap';

const ComponenteAPI = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
      const apiUrl = 'https://api.unsplash.com/photos/?query=flowers&orientation=portrait&color=red&client_id=AmlGWTJ5RK4Yo13n07JueVkC8SD7AHhj6YWvstXvhgg&count=12';
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setFlowers(data))
        .catch(error => console.error('Error fetching flowers:', error));
    }, []);
  
    return (
        <div className='presentacion'>
            <h3>Galeria de imagenes</h3>
            <p>Explora nuestra galería de imágenes, sumérgete en la frescura de los pétalos y 
                déjate llevar por la armonía de los colores. Estas fotos no solo son un vistazo a nuestra colección,
                 sino también una invitación a experimentar la calidad y el encanto que Flor de Lis 
                 tiene para ofrecer. 
                 <br/>¡Esperamos que encuentres la inspiración que buscas para dar vida a 
                 tus momentos especiales con nuestras hermosas flores!</p>

    
         <Container className="container">
            <Row className="carruRow">
                {flowers.map(flower => (
                <Col key={flower.id} xs={12} md={3} lg={4}>
                    <Card className="card-margin">
                    <Card.Img
                        variant="top"
                        src={flower.urls.small}
                        alt={flower.alt_description}
                        className="img-fluid carruImg"
                    />
                    <Card.Body className="carruBody">
                        <Card.Title>{flower.alt_description || 'Sin descripción'}</Card.Title>
                        {/* Puedes agregar más detalles aquí según tus necesidades */}
                        <Button className="botonPri" variant="primary" size="sm" >Ver más</Button>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
      </div>

    );
};

export default ComponenteAPI;
