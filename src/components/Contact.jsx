import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Travaillons Ensemble !
        </h2>
        <p className="text-xl mb-12">
          Je suis actuellement en recherche d'une alternance en développement web/mobile 
          et gestion de projet. N'hésitez pas à me contacter !
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Mail size={32} className="mx-auto mb-4" />
            <div className="font-semibold mb-2">Email</div>
            <a 
              href="mailto:siapriouattara21@gmail.com" 
              className="hover:underline break-all"
            >
              siapriouattara21@gmail.com
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Phone size={32} className="mx-auto mb-4" />
            <div className="font-semibold mb-2">Téléphone</div>
            <a href="tel:+33667470864" className="hover:underline">
              +33 6 67 47 08 64
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Linkedin size={32} className="mx-auto mb-4" />
            <div className="font-semibold mb-2">LinkedIn</div>
            <a 
              href="https://www.linkedin.com/in/ouattara-siapri/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              ouattara-siapri
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:siapriouattara21@gmail.com" 
            className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            M'envoyer un email
          </a>
          <a 
            href="https://porfolio-vuw6.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            Mon ancien portfolio <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;