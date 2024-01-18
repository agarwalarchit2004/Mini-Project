import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vidi from '../assets/bg.mp4';
import Vidi2 from '../assets/bg2.mp4';
import Vidi3 from '../assets/bg3.mp4';
import { useState } from 'react';

const Caro = () => {
  const vprop = [
    {
      id: 1,
      title: 'Video 1',
      src: Vidi,
      credit: 'Welcome to Virtual Art Gallery',
    },
    {
      id: 2,
      title: 'Video 2',
      src: Vidi2,
      credit: 'Welcome to Virtual Art Gallery',
    },
    {
      id: 3,
      title: 'Video 3',
      src: Vidi3,
      credit: 'Welcome to Virtual Art Gallery',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: '90vw', height: '50vh', margin: 'auto' }}>
      <Carousel className="caro">
        {vprop.map((vobj) => {
          return (
            <Carousel.Item key={vobj.id}>
              <ReactPlayer
                url={vobj.src}
                pip={true}
                controls={true}
                playing={true}
                width="100%" 
                height="100%"
              />
              <Carousel.Caption>
                <h3>{vobj.title}</h3>
                <p>{vobj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Caro;
