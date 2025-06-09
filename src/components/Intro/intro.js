import React from 'react'
import './intro.css';
import bg from '../../assets/photo.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    
    <section id="intro"  data-aos="fade-right">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Annmary </span> <br />Developer</span>
            <p className="introPara">I am an AI/ML engineer and and also a frontend developer</p>
            <Link to="contact" spy={true} smooth={true} duration={500}>
                <button className="btn">
                    <img src={btnImg} alt="Hire" className='btnImg' />Hire Me
                </button>
            </Link>
        </div>
        <div className="imageContainer">
            <img src={bg} alt="Profile" className="bg"/>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
    
  )
}

export default Intro
