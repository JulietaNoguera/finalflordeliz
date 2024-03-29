/*eslint-disable no-unused-vars*/
import { useState } from 'react';
import CarrucelModelo from '../Modelo/CarrucelModelo';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const CarrucelVista = () => {

 
  const [cards, setCards] = useState([
    {
      id: 1,
      url: "./Img/boda.JPG",
      title: 'Boda',
      description: 'Flores para boda.',
    },
    {
      id: 2,
      url: "./Img/funeral.JPG",
      title: 'Funeral',
      description: 'Flores para funeral.',
    },
    {
      id: 3,
      url: "./Img/cumple.JPG",
      title: 'Cumpleaños',
      description: 'Flores para cumpleaños.',
    }
  ]);

  return (
    <>
      <div>
        <CarrucelModelo imagenes={cards} />
      </div>
    </>
  );
};

export default CarrucelVista;
