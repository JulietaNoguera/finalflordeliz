import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navegador = () => {
  const imagenUrl = '../Img/LOGO.png'; 

  const estiloImagen = {
    width: '40px', // Ajusta el ancho según tus necesidades
    height: '40px', // Ajusta la altura según tus necesidades
    marginRight: '10px', // Ajusta el margen derecho según tus necesidades
    marginLeft:'40%'
  };

  return (
    <Navbar className='navPrincipal' expand="lg">
     
        <Navbar.Brand>
          <Link to="/" className='nombre'>
            <img
              src={imagenUrl}
              alt="Flor de Lis"
              style={estiloImagen}
            />
            FLOR DE LIS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Agrega aquí tus enlaces de navegación si los necesitas */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegador;
