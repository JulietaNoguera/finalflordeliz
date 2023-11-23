import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ComponenteAPI = () => {
  const [flowerPhotos, setFlowerPhotos] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.unsplash.com/search/photos?page=1&query=flores-rojas&client_id=AmlGWTJ5RK4Yo13n07JueVkC8SD7AHhj6YWvstXvhgg&per_page=12&orientation=squarish';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setFlowerPhotos(data.results))
      .catch(error => console.error('Error fetching flower photos:', error));
  }, []);

  const handleDownloadClick = (photoUrl, photoId) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `flor_${photoId}.jpg`; // Puedes personalizar el nombre del archivo aquí
    link.click();
  };

  return (
    <div className='presentacion'>
      <h3>Galeria de imagenes</h3>
      <p>Explora nuestra galería de imágenes, sumérgete en la frescura de los pétalos y
        déjate llevar por la armonía de los colores. Estas fotos no solo son un vistazo a nuestra colección,
        sino también una invitación a experimentar la calidad y el encanto que Flor de Lis
        tiene para ofrecer.
        <br></br>
        <b>¡Esperamos que encuentres la inspiración que buscas con las imagenes que nos pasaron nuestros
          clientes!</b></p>
      <Container className="container mb-4">
        <Row className="carruRow">
          {flowerPhotos.map(photo => (
            <Col key={photo.id} xs={12} md={3} lg={4}>
              <Card className="card-margin">
                <Card.Img
                  variant="top"
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="img-fluid carruImg"
                />
                <Card.Body className="carruBody">
                  <Card.Title>{photo.description || 'Sin descripción'}</Card.Title>

                  <Button
                    className="botonPri"
                    variant="primary"
                    size="sm"
                    onClick={() => handleDownloadClick(photo.urls.full, photo.id)}
                  >
                    Ver
                  </Button>
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
