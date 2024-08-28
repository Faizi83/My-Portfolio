import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='container hero'>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 my-col">
          <h1 className="heading">I'm Faizan Khan</h1>
          <p className='para'>I am a full-stack developer specializing in ASP.NET Core and React.js with 2 years of experience. Passionate about creating dynamic web applications and solving complex technical challenges efficiently</p>
          <Link className='projects' to="/projects">
            My Projects
          </Link>
          <Link className='resume' to="/resume">
            My Resume
          </Link>
          <div className="icons">
            <a href="https://github.com/Faizi83" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' style={{ color: 'white' }} icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100018232264609" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' style={{ color: 'white' }} icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/faizankhaan27/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' style={{ color: 'white' }} icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/faizan-khan-aa0646300/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' style={{ color: 'white' }} icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
