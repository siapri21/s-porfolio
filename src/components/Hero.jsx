import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="text-orange-500 font-semibold text-lg">
            Hello, je suis Siapri Ouattara 👋
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-orange-500">Développeuse</span> Full Stack & Mobile
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Passionnée par la création d'applications web et mobiles innovantes. 
            Actuellement en recherche d'alternance en développement et gestion de projet (Bac+3 à Bac+5).
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition transform hover:scale-105"
            >
              Me contacter
            </a>
            <a 
              href="#projects" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Voir mes projets
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/ouattara-siapri/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-orange-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com/siapri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-orange-500 transition"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-8 border-orange-500 shadow-2xl transform hover:scale-105 transition duration-300">
            <img 
              src="https://i.postimg.cc/nL2pZ5fZ/photo-pro.jpg" 
              alt="Siapri Ouattara"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
            <div className="text-sm font-semibold">Disponible en alternance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;