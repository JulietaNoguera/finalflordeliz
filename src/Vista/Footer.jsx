import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../vista.css";
const Footer = () => {

  const estiloNav = {
    backgroundColor: '#944672', // Reemplaza con el color de fondo que desees
    width: '100%',
    position: 'absolute',
    bottom: 0,
    overFlow: 'hidden'
  };

  const estiloNavLink = {
    color: '#ffffff', // Reemplaza con el color de texto que desees
  };

  return (
    <div style={estiloNav}>
      <Nav className="justify-content-center sesion" activeKey="/home">
        <Nav.Item className="sesion">
          <Nav.Link href="#" style={estiloNavLink}>
            Creado Noguera Julieta / Marcelo Torres
          </Nav.Link>
          <Nav.Link href="#" style={estiloNavLink}>
            CIU/UNIVERSIDAD NACIONAL DE HURLINGHAM
          </Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  )
};

export default Footer;
