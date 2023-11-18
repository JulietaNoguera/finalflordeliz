import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarrucelVista from './Vista/CarrucelVista';
import SeccionVista from './Vista/SeccionVista';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ArmarModelo from './Modelo/ArmarModelo';

const App = () => {
  return (
    <Router>
      <Routes>
       
      <Route path="/" element={<CarrucelVista />} />
      <Route path="/SeccionVista/:id" element={<SeccionVista/>} />
      <Route path='/armarFlor'element={<ArmarModelo/>}/>
      </Routes>
    </Router>
  );
};

export default App;