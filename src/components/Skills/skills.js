import React, { useEffect } from 'react';
import './skills.css';
import Ml from '../../assets/Ml.png';
import DevOps from '../../assets/Devops.png';
import React1 from '../../assets/React1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id='skills'>
      <span 
        className="skillTitle" 
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Chapters within me
      </span>
      
      <span 
        className="skillDesc"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        I am skilled with hands-on experience using machine learning concepts using python programming language, React js, familirized Stable diffusion models and aware of DevOps concepts. My teamwork, good communication skills, problem solving skills, leadership quality all these ensure bringing changes for the betterment of the company's wellbeing.
      </span>
      
      <div className="skillBars">
        <div 
          className="skillBar"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img src={Ml} alt="Ml" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p>Familirized with the Machine learning algorithms and took certification courses on this topic and done project to upskill my knowledge in ML with hands-on experience.</p>
          </div>
        </div>
        
        <div 
          className="skillBar"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img src={DevOps} alt="DevOps" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>DevOps</h2>
            <p>Familirized with the concepts of DevOps. Along with grabbed the knowledge in Linux, AWS etc.</p>
          </div>
        </div>
        
        <div 
          className="skillBar"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img src={React1} alt="React1" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>React</h2>
            <p>Familirized with React and I expanded my knowledge in this by doing a project by integrating React with Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;