import { useState } from 'react';
import ArmarModelo from '../Modelo/ArmarModelo';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const ArmarVista = () => {

    const [cards, setCards] = useState([
        {
          id: 1,
          url:"./Img/Amarillo0001.jpg",
          title: 'Ramo amarillo 1',
          cantidad:"10",
          color:"Amarillo",
          colorLazo:"Amarillo",
          description: 'Tarro de flores.',
          precio:"1500",
          seleccionado:0,
        },
        {
          id: 2,
          url:"./Img/Amarillo0002.JPG",
          title: 'Ramo amarillo 2 ',
          cantidad:"10",
          color:"Amarillo",
          colorLazo:"Blanco",
          description: 'Ramo de campo.',
          precio:"1700",
          seleccionado:0,
        },
        {
          id: 3,
          url:"./Img/Amarillo0003.JPG",
          title: 'Tarro amarillo',
          cantidad:"10",
          color:"Amarillo",
          colorLazo:"Rojo",
          description: 'Tarron amarillo',
          precio:"1900",
          seleccionado:0,
        },
        {
          id: 4,
          url:"./Img/Amarillo0007.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Amarillo",
          colorLazo:"Amarillo",
          description: 'corazon amarillo',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 5,
          url:"./Img/Amarillo0008.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Amarillo",
          colorLazo:"Blanco",
          description: 'corazon amarillo',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 6,
          url:"./Img/Amarillo0009.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Amarillo",
          colorLazo:"Rojo",
          description: 'corazon amarillo',
          precio:"3000",
          seleccionado:0,
        },

        {
          id: 7,
          url:"./Img/Azul0001.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Azul",
          colorLazo:"Blanco",
          description: 'Ramo azul',
          precio:"1600",
          seleccionado:0,
        },
        {
          id: 8,
          url:"./Img/Azul0002.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Azul",
          colorLazo:"Rojo",
          description: 'ramo azul ',
          precio:"1800",
          seleccionado:0,
        },
        {
          id: 9,
          url:"./Img/Azul0003.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Azul",
          colorLazo:"Amarillo",
          description: 'Ramo azul',
          precio:"1700",
          seleccionado:0,
        },
        {
          id: 10,
          url:"./Img/Azul0007.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Azul",
          colorLazo:"Amarillo",
          description: 'Corazón azul',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 11,
          url:"./Img/Azul0008.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Azul",
          colorLazo:"Blanco",
          description: 'Corazón azul',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 12,
          url:"./Img/Azul0009.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Azul",
          colorLazo:"Rojo",
          description: 'corazón azul',
          precio:"3000",
          seleccionado:0,
        },

        {
          id: 13,
          url:"./Img/Blanco0001.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Blanco",
          colorLazo:"Amarillo",
          description: 'Ramo Blanco',
          precio:"1600",
          seleccionado:0,
        },
        {
          id: 14,
          url:"./Img/Blanco0002.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Blanco",
          colorLazo:"Blanco",
          description: 'ramo Blanco ',
          precio:"1800",
          seleccionado:0,
        },
        {
          id: 15,
          url:"./Img/Blanco0003.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Blanco",
          colorLazo:"Rojo",
          description: 'Ramo Blanco',
          precio:"1700",
          seleccionado:0,
        },
        {
          id: 16,
          url:"./Img/Blanco0007.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Blanco",
          colorLazo:"Amarillo",
          description: 'Corazón Blanco',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 17,
          url:"./Img/Blanco0008.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Blanco",
          colorLazo:"Rojo",
          description: 'Corazón Blanco',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 18,
          url:"./Img/Blanco0009.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Blanco",
          colorLazo:"Blanco",
          description: 'corazón Blanco',
          precio:"3000",
          seleccionado:0,
        },

        {
          id: 19,
          url:"./Img/Rojo0001.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Rojo",
          colorLazo:"Rojo",
          description: 'Ramo Rojo',
          precio:"1600",
          seleccionado:0,
        },
        {
          id: 20,
          url:"./Img/Rojo0002.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Rojo",
          colorLazo:"Blanco",
          description: 'ramo Rojo ',
          precio:"1800",
          seleccionado:0,
        },
        {
          id: 21,
          url:"./Img/Rojo0003.JPG",
          title: 'Ramo',
          cantidad:"10",
          color:"Rojo",
          colorLazo:"Amarillo",
          description: 'Ramo Rojo',
          precio:"1700",
          seleccionado:0,
        },
        {
          id: 22,
          url:"./Img/Rojo0007.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Rojo",
          colorLazo:"Rojo",
          description: 'Corazón Rojo',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 23,
          url:"./Img/Rojo0008.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Rojo",
          colorLazo:"Amarillo",
          description: 'Corazón Rojo',
          precio:"3000",
          seleccionado:0,
        },
        {
          id: 24,
          url:"./Img/Rojo0009.JPG",
          title: 'Corazon',
          cantidad:"50",
          color:"Rojo",
          colorLazo:"Blanco",
          description: 'corazón Rojo',
          precio:"3000",
          seleccionado:0,
        },
      ]);
    
      const cantidades = ["10", "50"];
      const coloresFlores = ['Rojo', 'Azul', 'Amarillo', 'Blanco'];
      const coloresLazos = ['Amarillo', 'Blanco', 'Rojo'];
    
      
      const handleEleccion = (eleccion) => {
        console.log('Elección realizada:', eleccion);
        //  carrAquí puedes realizar acciones adicionales con la elección, como agregar alito, etc.
      };

      return (
        <>
          <div  className='presentacion'>
            
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

