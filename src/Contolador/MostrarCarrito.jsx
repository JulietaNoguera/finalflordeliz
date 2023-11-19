import React, { useState } from 'react';
import Carrito from '../Vista/Carrito';

const MostrarCarrito = ({productos}) => {

    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const mostrarOcultarCarrito = () => {
      setMostrarCarrito(!mostrarCarrito);
    };


  return (
    <div>
      <img
        src="./Img/carrito.png" 
        width={40}
        height={40} // Reemplaza con la ruta de tu imagen
        alt="Mostrar Carrito"
        onClick={mostrarOcultarCarrito}
        style={{ cursor: 'pointer' }}
      />
      {mostrarCarrito && <Carrito productos={productos}/> }
    </div>
  )
}

export default MostrarCarrito;
