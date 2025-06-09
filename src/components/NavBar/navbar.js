import React from 'react';
import './navbar.css';
import  logo from '../../assets/logo.png';
import {Link as ScrollLink} from 'react-scroll';
import contactImg from '../../assets/contact.png';
const Navbar = () =>{
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu"> 
                <ScrollLink 
                    to="intro" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={-70} 
                    className="desktopMenuListItem"
                >
                    Home
                </ScrollLink>
                <ScrollLink 
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={-50} 
                    className="desktopMenuListItem"
                >
                    About
                </ScrollLink>
                <ScrollLink 
                    to="portfolio" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={-50} 
                    className="desktopMenuListItem"
                >
                    Portfolio
                </ScrollLink> 
                <ScrollLink 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={-50} 
                    className="desktopMenuListItem"
                >
                    Contact
                </ScrollLink>          
            </div>
            <ScrollLink 
                to="contactPage" 
                spy={true} 
                smooth={true} 
                duration={500}
                offset={-50}
            >
                <button className="desktopMenuBtn">
                    <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me
                </button>
            </ScrollLink>
        </nav>
    )
}
export default Navbar;