
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const RecuadroFlor = ({ imagenes, eleccion }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);

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

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={imagenes[indiceImagen].url}
        alt={`imagen ${imagenes[indiceImagen].id}`}
        className="img-fluid carruImg"
      />
      
    </Card>
  );
};
export default RecuadroFlor;

/*<Card.Body>
        <Card.Title>Imagen Dinámica</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>*/