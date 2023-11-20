import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarrucelVista from './Vista/CarrucelVista';
import SeccionVista from './Vista/SeccionVista';  
import 'bootstrap/dist/css/bootstrap.min.css';
import ArmarVista from './Vista/ArmarVista';
import Login from './Vista/Login';
import Navegador from './Vista/Navegador';
import Footer from './Vista/Footer';

const App = () => {
 

  return (
    
    <Router>
      <Login/>
      <Navegador/>
      <Routes>
       
      <Route path="/" element={<CarrucelVista />} />
      <Route path="/SeccionVista/:id" element={<SeccionVista/>} />
      <Route path='/ArmarVista'element={<ArmarVista/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;