import { useEffect, useState } from 'react';
import ArmarModelo from '../Modelo/ArmarModelo';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { datos } from '../Datos/datos';

const ArmarVista = () => {

  const [cards, setCards] = useState([]);
  useEffect(() => { setCards(datos) }, [cards])
  const cantidades = ["10", "50"];
  const coloresFlores = ['Rojo', 'Azul', 'Amarillo', 'Blanco'];
  const coloresLazos = ['Amarillo', 'Blanco', 'Rojo'];
  console.log(cards)
  console.log(datos)

  const handleEleccion = (eleccion) => {
    console.log('Elección realizada:', eleccion);
    //  carrAquí puedes realizar acciones adicionales con la elección, como agregar alito, etc.
  };

  return (
    <>
      <div className='presentacion'>

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

