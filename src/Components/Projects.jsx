import React from "react";
import "./Projects.css";
import web1 from "../assets/stationery-web.png";
import web2 from "../assets/restaurant-web.png";
import web3 from "../assets/gaming-web.png";
import web4 from "../assets/lab-web.png";

const Projects = () => {
  return (
    <div>
      <h2 className="proj text-center">
        My <span style={{ color: "#ff7f00" }}>Projects</span>
      </h2>
      <div className="container mt-5">
        <div className="row g-5">
        <div className="col-lg-4 col-md-6 col-12">
     <div className="card">
       <a href="https://www.stationeries.somee.com/login" className="text-decoration-none">
     
        <img src={web1} className="card-img" alt="Stationeries Management System" />
      

       
        <p className="card-text">
          Stationeries Management System using Asp.Net Core & Sql
        </p>
 
       
     
    </a>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-12">
  <div className="card">
    <a href="https://yummsrestaurant.somee.com/login" className="text-decoration-none">
      <img src={web2} className="card-img" alt="Stationeries Management System" />
     
        <p className="card-text">
          Restaurant Management System using Asp.Net Core & Sql
        </p>
    
    </a>
  </div>
</div>


<div className="col-lg-4 col-md-6 col-12">
     <div className="card">
       <a  href="http://gameons.infinityfreeapp.com/" className="text-decoration-none">
     
   
  
     
      <img src={web3} className="card-img" alt="Stationeries Management System" />
        <p className="card-text">
          E-Commerce Gaming Store using Laravel & MySql
        </p>
    
    </a>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-12">
     <div className="card">
       <a  href="https://www.labautomationsystem.infinityfreeapp.com/" className="text-decoration-none">
     
        <img src={web4} className="card-img" alt="Stationeries Management System" />
      
     
        <p className="card-text">
          Labautomation Management System using PHP & MySql
        </p>
     
    </a>
  </div>
</div>

          {/* <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <a
                href="https://yummsrestaurant.somee.com/login"
                className="text-decoration-none"
              >
                <div className="card-img-container">
                  <img src={web2} className="card-img" alt="Restaurant Management System" />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Restaurant Management System using Asp.Net Core & Sql
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <a
                href="http://gameons.infinityfreeapp.com/"
                className="text-decoration-none"
              >
                <div className="card-img-container">
                  <img src={web3} className="card-img" alt="E-Commerce Gaming Store" />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    E-Commerce Gaming Store using PHP & Laravel Mysql Database
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <a
                href="https://www.labautomationsystem.infinityfreeapp.com/"
                className="text-decoration-none"
              >
                <div className="card-img-container">
                  <img src={web4} className="card-img" alt="Labautomation Management System" />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Labautomation Management System using PHP Mysql Database
                  </p>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
