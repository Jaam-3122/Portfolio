import React from 'react'
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin.webp';
const contact = () => {
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below for any enquiry.</span>
            <div className="emailContact">Email: annmaryjimmy3110@gmail.com</div>
            <form className="contactForm">
                <input type="text" className="name"placeholder='Your name'/>
                <input type="email" className="email"placeholder='Your emailid'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={LinkedInIcon} alt="LinkedIn" className="link"/>
                    <img src={InstagramIcon} alt="Instagram" className="link"/>
                </div>
            </form>

        </div>
    </section>
  )
}

export default contact
