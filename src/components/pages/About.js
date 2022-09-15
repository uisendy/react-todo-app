import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getAboutDatas } from '../data/aboutData';
import NavBar from '../NavBar';
const About = () => {
  const aboutData = getAboutDatas();

  return (
    <div className="about__content">
      <NavBar />
      <ul className="about__list">
        {aboutData.map((about) => (
          <li key={about.id}>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/about/${about.slug}`}
            >
              {about.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
