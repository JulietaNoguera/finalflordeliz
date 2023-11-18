import { useState } from 'react';
import ArmarModelo from '../Modelo/ArmarModelo';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const ArmarVista = () => {

    const [cards, setCards] = useState([
        {
          id: 1,
          url:"./Img/E-0001.JPG",
          title: 'Ramo1',
          cantidad:"1",
          color:"Rojo",
          colorLazo:"Verde",
          description: 'Flores para boda.',
        },
        {
          id: 2,
          url:"./Img/E-0002.JPG",
          title: 'Ramo1',
          cantidad:"1",
          color:"Rojo",
          colorLazo:"Rosa",
          description: 'Flores para boda.',
        },
        {
          id: 3,
          url:"./Img/E-0003.JPG",
          title: 'Ramo1',
          cantidad:"1",
          color:"Rojo",
          colorLazo:"Morado",
          description: 'Flores para boda.',
        }
      ]);
    
      const cantidades = ["1", "2", "3", "4", "5"];
      const coloresFlores = ['Rojo', 'Azul', 'Amarillo', 'Blanco'];
      const coloresLazos = ['Verde', 'Rosa', 'Morado', 'Dorado'];
    
      
      const handleEleccion = (eleccion) => {
        console.log('Elección realizada:', eleccion);
        //  carrAquí puedes realizar acciones adicionales con la elección, como agregar alito, etc.
      };

      return (
        <>
          <div>
            <h1>Lista de Tarjetas</h1>
                <ArmarModelo 
                imagenes={cards} 
                cantidad={cantidades}
                colorFlor={coloresFlores}
                colorLazo={coloresLazos}
                
                />
          </div> 
        </>
      );
};

export default ArmarVista;

