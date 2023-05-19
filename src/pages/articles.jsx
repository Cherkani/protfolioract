import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@chakra-ui/react';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';

import './styles/articles.css';

const Articles = () => {
  const certifications = [
    {
      id: 1,
      title: 'java FX',
     
      image: 'c1.png',
    },
    {
      id: 2,
      title: 'PHP',
     
      image: 'c2.png',
    },
    {
      id: 3,
      title: 'JS',
     
      image: 'c3.png',
    }
	,{
		id: 3,
		title: 'wordpress',
	   
		image: 'c4.png',
	  }
    // Add more certifications as needed
  ];

  const certificationTemplate = (certification) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Heading className="skills-heading">
          <FontAwesomeIcon icon={faCertificate} className="skills-icon" />
          <span className="skills-heading">Achievements</span>
        </Heading>
        <Card title={certification.title}>
          <img src={certification.image} alt={certification.title} style={{ maxWidth: '300px', height: 'auto' }} />
          <p>{certification.description}</p>
        </Card>
      </div>
    );
  };

  return (
    <div>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
      <NavBar active="articles" />
      <Heading className="skills-heading">
        <FontAwesomeIcon icon={faCertificate} className="skills-icon" />
        <span className="skills-heading"> Achievements</span>
      </Heading>
      <div>
        {certifications.map((certification) => (
          <div key={certification.id} style={{ textAlign: 'center' }}>
            <Card title={certification.title}>
              <img src={certification.image} alt={certification.title} style={{ maxWidth: '300px', height: 'auto' }} />
              <p>{certification.description}</p>
            </Card>
          </div>
        ))}
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
