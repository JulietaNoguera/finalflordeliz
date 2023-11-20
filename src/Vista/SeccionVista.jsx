import { useNavigate, useParams } from 'react-router-dom';
import SeccionModelo from '../Modelo/SeccionModelo';

const SeccionVista = () => {
  const { id } = useParams();


  

  const cards = [
    {
      id: 1,
      url: "../Img/1-0001.JPG",
      title: 'ramo normal',
      description: 'ramo normal.',
      seccion: 1,
    },
    {
        id: 2,
        url: "../Img/1-0002.JPG",
        title: 'ramo normal',
        description: 'ramo 2.',
        seccion: 1,
      },
      {
        id: 3,
        url: "../Img/1-0003.JPG",
        title: 'ramo normal',
        description: 'ramo normal.',
        seccion: 1,
      }, 
      {
        id: 4,
        url: "../Img/1-0004.JPG",
        title: 'ramo normal',
        description: 'ramo normal.',
        seccion: 1,
      },
      {
        id: 5,
        url: "../Img/2-0001.JPG",
        title: 'ramo cruz',
        description: 'ramo cruz.',
        seccion: 2,
      },{
        id: 6,
        url: "../Img/2-0002.JPG",
        title: 'ramo corazon',
        description: 'ramo corazon.',
        seccion: 2,
      },{
        id: 7,
        url: "../Img/2-0003.JPG",
        title: 'ramo circular',
        description: 'ramo circular.',
        seccion: 2,
      },
      {
        id: 8,
        url: "../Img/2-0004.JPG",
        title: 'ramo canastillo',
        description: 'ramo canastillo.',
        seccion: 2,
      },
      {
        id: 9,
        url: "../Img/3-0001.JPG",
        title: 'ramo centro de mesa',
        description: 'ramo centro de mesa',
        seccion: 3,
      },
      {
        id: 10,
        url: "../Img/3-0002.JPG",
        title: 'ramo sillas',
        description: 'ramo sillas',
        seccion: 3,
      },
      {
        id: 11,
        url: "../Img/3-0003.JPG",
        title: 'ramo adorno mesa',
        description: 'ramo adorno mesa',
        seccion: 3,
      },
      {
        id: 12,
        url: "../Img/3-0004.JPG",
        title: 'arco floral',
        description: 'arco floral',
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
