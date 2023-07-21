
import React from 'react';
import { Card } from 'primereact/card';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';

import './styles/articles.css';

const Articles = () => {
  const certifications = [
    {
      id: 1,
     
      image: 'c5.jpeg',
     
    },
    {
      id: 2,
     
      image: 'c6.png',
     
    },
    {
      id: 3,
     
      image: 'c2.png',
     
    },
    {
      id: 4,
    
      image: 'c3.png',
    
    },
    {
      id: 5,
     
      image: 'c4.png',
    
    },
    // Ajoutez plus de certifications au besoin
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <div>
      <NavBar active="articles" />
      <Heading className="skills-heading">
        <FontAwesomeIcon icon={faCertificate} className="skills-icon" />
        <span className="skills-heading"> Achievements</span>
      </Heading>
      <div className="slider-container">
  <Slider {...sliderSettings}>
    {certifications.map((certification) => (
      <div key={certification.id} className="slider-item">
        <Card title={certification.title}>
          <img
            src={certification.image}
            alt={certification.title}
            className="certification-image"
          />
          <p>{certification.description}</p>
        </Card>
      </div>
    ))}
  </Slider>
</div>

      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
