import React from 'react'
import './Resume.css';
import questionMark from  '../assets/question-mark.png'
import skills from  '../assets/skills.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPhp, faCss3Alt, faHtml5, faJsSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDotCircle, faDatabase} from '@fortawesome/free-solid-svg-icons';


const Resume = () => {
    return (
        <div className="py-3 py-md-5 Resume">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 col-xl-5">
                <img
                  className="img-fluid rounded q-mark"
                  loading="lazy"
                  src={questionMark}
                  
                />
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 className="mb-3">Who I <span  style={{ color: '#ff7f00' }}>Am?</span></h2>
                    <p className="lead fs-4  mb-3" >
                    A Seasoned Full-Stack Developer with a specialization in ASP.NET Core and React.js:
                    </p>
                    <p className=" text-secondary" >
                    I am passionate Resume delivering innovative solutions and thrive in fast-paced environments where I can apply my skills to solve complex challenges. My dedication to continuous learning and staying updated with industry trends ensures that I bring cutting-edge technology and best practices to every project.
                    </p>
                    <p className=" text-secondary" >
                    I am committed to transforming ideas into reality and am eager to contribute to exciting projects that push the boundaries of technology.
                    </p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* Education & Skills Section */}

          <div className="container  education">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
             
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 className="mb-3">Skills <span  style={{ color: '#ff7f00' }}>& Education</span></h2>
                    <p className="lead fs-4  mb-3" >
                    ADSE from Aptech Education:
                    </p>
                    
                  
                    <p className=" text-secondary" >
                    I Build full-stack web applications using HTML, CSS, JavaScript, Bootstrap, jQuery, and React while leveraging backend skills in PHP, Laravel, ASP.NET Core MVC, and REST APIs with SQL and MySQL, and I am proficient with GitHub, having completed projects in e-commerce, gaming, restaurant management, and stationery systems; I also develop single-page applications with React or AJAX and possess a solid grasp of object-oriented programming (OOP)
                    </p>

                    <p className="lead fs-4  mb-3" >
                     Intermediate:
                    </p>
                    
                    <p className=" text-secondary" >
                     From Karachi Board (2023)
                    </p>
                
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-5">
                <img
                  className="img-fluid rounded q-mark"
                  loading="lazy"
                  src={skills}
                  
                />
              </div>
            </div>
          </div>
              {/* SKills Section */}
      <div className="py-5 py-xl-8 skills ">
    

      <div className="container overflow-hidden">




        <div className="row gy-5 ">
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item1">
          <FontAwesomeIcon icon={faHtml5} className="custom-size" />
  <h5 className="m-2">Html</h5>
  
</div>

          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item2">
            <FontAwesomeIcon icon={faCss3Alt} className="custom-size" />
              <h5 className="m-2">Css</h5>
             
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item3">
            <FontAwesomeIcon icon={faJsSquare} className="custom-size" />
              <h5 className="m-2">Javascript</h5>
         
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item4">
            <FontAwesomeIcon icon={faDotCircle} className="custom-size" />
              <h5 className="m-2">Asp.Net</h5>
          
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item5">
            <FontAwesomeIcon icon={faReact} className="custom-size" />
              <h5 className="m-2">React</h5>
             
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item6">
            <FontAwesomeIcon icon={faPhp} className="custom-size" />
              <h5 className="m-2">php</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item7">
            <FontAwesomeIcon icon={faDatabase} className="custom-size" />
              <h5 className="m-2">Sql</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
          <div className="text-center px-xl-2 skill-item8">
            <FontAwesomeIcon icon={faGithub} className="custom-size" />
              <h5 className="m-2">Github</h5>
            </div>
          </div>
        
         
    
        </div>
      </div>
    </div>
        </div>
      );
    };


export default Resume