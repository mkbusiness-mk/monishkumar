import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
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
