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
          <b>Carrito:</b> <span className='cart-count'>{productos.length}</span>
        </li>
        <li>
          <b>Productos:</b>
          {productos.length > 0 ? (
            <ul>
              {productos.map((producto) => (
                <li className="seleccionados"key={producto.id}>
                  <Button className='botonElim'  variant="outline-danger "  size="sm"onClick={() => eliminarProducto(producto.id)}>
                  <img src="./Img/eliminar.png" alt="Eliminar" width={10} height={10} />
                  </Button>
                  <b>{producto.title}</b> <br/> Cantidad: {producto.seleccionado} <br/> Precio: $ {producto.precio * producto.seleccionado}
                  
                </li>
              ))}
            </ul>
          ) : (
            <p><b>No hay productos seleccionados.</b></p>
          )}
        </li>
        <li className='precioTotal'><b>Precio Total:</b> ${precioTotal}</li>
        <li>
          {productos.length > 0 && (
            <Button className='botonPri'  size="sm"  variant="success" >
              Iniciar compra
            </Button>
          )}
        </li>
      </ul>
    </>
  );
};

export default Carrito;