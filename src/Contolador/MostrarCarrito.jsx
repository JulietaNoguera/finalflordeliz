import React, { useState } from 'react';
import Carrito from '../Vista/Carrito';


const MostrarCarrito = ({ productos, setProductos }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const mostrarOcultarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const eliminarProducto = (id) => {
    // Filtrar los productos para obtener un nuevo array sin el producto que tiene el id especificado
    const nuevosProductos = productos.filter((producto) => producto.id !== id);

    // Actualizar el estado con los nuevos productos
    setProductos(nuevosProductos);
  };


  return (
    <div>
      <img
        src="./Img/carrito.png"
        width={40}
        //height={40} // Reemplaza con la ruta de tu imagen
        alt="Mostrar Carrito"
        onClick={mostrarOcultarCarrito}
        style={{ cursor: 'pointer' }}
      />
      {mostrarCarrito && <Carrito productos={productos} onEliminarProducto={eliminarProducto} />}
    </div>
  )
}

export default MostrarCarrito;
