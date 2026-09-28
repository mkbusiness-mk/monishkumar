import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Focus from './components/Focus';
import ProfessionalSkills from './components/ProfessionalSkills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Focus />
        <ProfessionalSkills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
