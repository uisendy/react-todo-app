import React from 'react';
import { useParams } from 'react-router-dom';
import { getAboutData } from '../data/aboutData';

const AboutPages = () => {
  const params = useParams();
  const about = getAboutData(params.aboutPage);
  const { title, description } = about;
  return (
    <div className="main__content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutPages;
