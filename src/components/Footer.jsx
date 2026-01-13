import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4">
          © 2025 Siapri Ouattara - Développeuse Full Stack & Mobile
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/ouattara-siapri/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-orange-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/siapri" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-orange-500 transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:siapriouattara21@gmail.com" 
            className="hover:text-orange-500 transition"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;