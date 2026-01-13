import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Projets' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">Siapri.dev</div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-orange-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;