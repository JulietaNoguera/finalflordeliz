/*eslint no-unused-vars: "error"*/
import { useParams } from 'react-router-dom';
import SeccionModelo from '../Modelo/SeccionModelo';

const SeccionVista = () => {
  const { id } = useParams();




  const cards = [
    {
      id: 1,
      url: "../Img/1-0001.JPG",
      title: ' Ramo nosegay',
      description: 'Se caracteriza porque las flores son cortadas de forma uniforme',
      seccion: 1,
    },
    {
      id: 2,
      url: "../Img/1-0002.JPG",
      title: 'Ramo redondo',
      description: 'Es uno de los estilos de ramos para ceremonias más tradicionales y formales.',
      seccion: 1,
    },
    {
      id: 3,
      url: "../Img/1-0003.JPG",
      title: 'Ramo tipo cascada',
      description: 'Está cayendo de manera fluida de las manos y usualmente se lleva en una versión grande.',
      seccion: 1,
    },
    {
      id: 4,
      url: "../Img/1-0004.JPG",
      title: ' Ramo atado a mano',
      description: 'Una opción ideal si estás buscando un estilo bohemio y casual ',
      seccion: 1,
    },
    {
      id: 5,
      url: "../Img/2-0001.JPG",
      title: 'Ramo cruz',
      description: 'Ramo cruz.',
      seccion: 2,
    }, {
      id: 6,
      url: "../Img/2-0002.JPG",
      title: 'Ramo corazon',
      description: 'Ramo corazon.',
      seccion: 2,
    }, {
      id: 7,
      url: "../Img/2-0003.JPG",
      title: 'Ramo circular',
      description: 'Ramo circular.',
      seccion: 2,
    },
    {
      id: 8,
      url: "../Img/2-0004.JPG",
      title: 'Ramo canastillo',
      description: 'Ramo canastillo.',
      seccion: 2,
    },
    {
      id: 9,
      url: "../Img/3-0001.JPG",
      title: 'Ramo centro de mesa',
      description: 'Ramo centro de mesa',
      seccion: 3,
    },
    {
      id: 10,
      url: "../Img/3-0002.JPG",
      title: 'Ramo sillas',
      description: 'Ramo sillas',
      seccion: 3,
    },
    {
      id: 11,
      url: "../Img/3-0003.JPG",
      title: 'Ramo adorno mesa',
      description: 'Ramo adorno mesa',
      seccion: 3,
    },
    {
      id: 12,
      url: "../Img/3-0004.JPG",
      title: 'Arco floral',
      description: 'Arco floral',
      seccion: 3,
    },

  ];

  const imagenesFiltradas = cards.filter(
    (imagen) => imagen.seccion.toString() === id
  );

  return (
    <>
      <div className='presentacion'>
        <SeccionModelo imagenes={imagenesFiltradas} />
      </div>
    </>
  );
};

export default SeccionVista;
