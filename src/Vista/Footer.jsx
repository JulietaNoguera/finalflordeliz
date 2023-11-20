import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./vista.css";
const Footer = () => {
    const imagenUrl = '../Img/LOGIN.png'; 

    const estiloImagen = {
      backgroundImage: `url(${imagenUrl})`,
      backgroundSize: 'cover',
      width: '10px', 
      height: '10px', 
      display: 'inline-block',
      marginRight: '10px',
    };

    
  const estiloNav = {
    backgroundColor: '#fbd3e9', // Reemplaza con el color de fondo que desees
  };

  const estiloNavLink = {
    color: '#ffffff', // Reemplaza con el color de texto que desees
  };

  return (
    <div>
      <Nav className="justify-content-center sesion" style={estiloNav} activeKey="/home">
        <Nav.Item className="sesion">
          <Nav.Link href="#" style={estiloNavLink}>
           Footer
          </Nav.Link>
        </Nav.Item>
       
       </Nav>
    </div>
  )
};

export default Footer;