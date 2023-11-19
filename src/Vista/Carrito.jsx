import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Carrito = ({ productos }) => {
  // Calcular el precio total sumando los precios de los productos seleccionados
  const precioTotal = productos.reduce((total, producto) => total + producto.precio * producto.seleccionado, 0);

  return (
    <>
      <ul>
        <li>
          Carrito: <span className='cart-count'>{productos.length}</span>
        </li>
        <li>
          Productos seleccionados:
          {productos.length > 0 ? (
            <ul>
              {productos.map((producto) => (
                <li key={producto.id}>
                  {producto.title} - Cantidad: {producto.seleccionado} - Precio: ${producto.precio * producto.seleccionado}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay productos seleccionados.</p>
          )}
        </li>
        <li>Precio Total: ${precioTotal}</li>
      </ul>
    </>
  );
};

export default Carrito;

