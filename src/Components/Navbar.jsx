import React, { useState, useEffect } from 'react';
import './Navbar.css';
import dot from  '../assets/dot.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <div>
  <nav className="navbar navbar-expand-lg">
        <div className="container fixed-top mt-4 "  >
            
          <Link className="navbar-brand" to="/"> <img src={dot} alt="" />portfolio
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
            <FontAwesomeIcon icon={faBarsStaggered} className="navbar-toggler-icon nav-icon"  />
          
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
           
            <a className="download-btn" href="/resume.pdf" download="Faizan_Khan_Resume.pdf">Download CV</a>


          </div>
 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
