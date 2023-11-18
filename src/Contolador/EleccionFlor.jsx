import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



const EleccionFlor = ({ cantidad, colorFlor, colorLazo, onEleccion }) => {
  const [selectedCantidad, setSelectedCantidad] = useState(cantidad[0]);
  const [selectedColorFlor, setSelectedColorFlor] = useState(colorFlor[0]);
  const [selectedColorLazo, setSelectedColorLazo] = useState(colorLazo[0]);

  const handleEleccion = () => {
    onEleccion({
        cantidad: selectedCantidad,
        colorFlor: selectedColorFlor,
        colorLazo: selectedColorLazo,
      });

  };

  return (
    <Form>
      <Form.Group controlId="cantidad">
        <Form.Label>Cantidad de flores</Form.Label>
        <Form.Control
          as="select"
          value={selectedCantidad}
          onChange={(e) => setSelectedCantidad(e.target.value)}
        >
          {cantidad.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="colorFlor">
        <Form.Label>Color de la flor</Form.Label>
        <Form.Control
          as="select"
          value={selectedColorFlor}
          onChange={(e) => setSelectedColorFlor(e.target.value)}
        >
          {colorFlor.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="colorLazo">
        <Form.Label>Color del lazo</Form.Label>
        <Form.Control
          as="select"
          value={selectedColorLazo}
          onChange={(e) => setSelectedColorLazo(e.target.value)}
        >
          {colorLazo.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button className='eleccionBoton' variant="primary" onClick={handleEleccion}>
        Realizar Elección
      </Button>
    </Form>
  );
};

export default EleccionFlor;
