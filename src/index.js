import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarrucelVista from './Vista/CarrucelVista';
import SeccionVista from './Vista/SeccionVista';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArmarVista from './Vista/ArmarVista';
import ComponenteAPI from './Contolador/ComponenteAPI';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CarrucelVista />} />
          <Route path="/SeccionVista/:id" element={<SeccionVista />} />
          <Route path='/ArmaRamo' element={<ArmarVista />} />
          <Route path='/Galeria' element={<ComponenteAPI />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();