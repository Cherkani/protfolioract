import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import TechnicalSkills from "../components/about/TechnicalSkills";
import "./styles/about.css";

const About = () => {
  useEffect(() => {
    document.title = `About | ${INFO.main.title}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
              </div>
			  <div>
    
      <TechnicalSkills />
      
    
    </div>
            </div>
            
          </div>
         
        </div>
      </div>
      <div className="page-footer">
            <Footer />
          </div>
    </React.Fragment>
  );
};

export default About;
