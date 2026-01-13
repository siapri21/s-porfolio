import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './animations/ParticleCanvas';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 text-gray-800 relative overflow-hidden">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;