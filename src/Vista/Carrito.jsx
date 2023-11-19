import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import "./vista.css";


const Carrito = ({ productos, onEliminarProducto }) => {
  // Calcular el precio total sumando los precios de los productos seleccionados
  const precioTotal = productos.reduce((total, producto) => total + producto.precio * producto.seleccionado, 0);

  const eliminarProducto = (id) => {
    // Llama a la función proporcionada desde el componente padre
    onEliminarProducto(id);
  };

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
                  <Button className='botonElim'  variant="outline-danger "  size="sm"onClick={() => eliminarProducto(producto.id)}>
                  <img src="./Img/eliminar.png" alt="Eliminar" width={10} height={10} />
                  </Button>
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