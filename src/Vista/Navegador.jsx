import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navegador = () => {
  const imagenUrl = '../Img/LOGO.png';

  const estiloImagen = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const estiloNavbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',  // Ajusta el padding izquierdo según tus necesidades
    paddingRight: '5%', // Ajusta el padding derecho según tus necesidades
    position: 'fixed',
    width: '100%',
    top: 0,
    marginTop: '30px',
    zIndex: 20,
  };

  const estiloNavLinks = {
    display: 'flex',
  };

  const enlaceStyle = {
    marginRight: '20px',
    color: '#629483',
    textDecoration: 'none',
  };

  return (
    <Navbar className='navPrincipal' expand="lg" style={estiloNavbar}>
      <Navbar.Brand>
        <Link to="/" className='nombre'>
          <img src={imagenUrl} alt="Flor de Lis" style={estiloImagen} />
          FLOR DE LIS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={estiloNavLinks}>
          <Link to="/Galeria" className='nombreNav' style={enlaceStyle}>
            GALERIA
          </Link>
          <Link to="/ArmaRamo" className='nombreNav' style={enlaceStyle}>
            ARMA TU RAMO
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegador;
