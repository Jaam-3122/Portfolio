import React, { useEffect } from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro data-aos="fade-right" />
      <Skills data-aos="fade-left" />
      <Contact data-aos="zoom-in" />
    </div>
  );
}
export default App;