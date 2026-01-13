import React from 'react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mon Parcours</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300 hidden md:block"></div>
          
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`mb-12 flex flex-col md:flex-row gap-8 items-center ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-5/12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className={`${exp.color} text-white px-4 py-1 rounded-full inline-block text-sm font-semibold mb-4`}>
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-orange-500">
                  {exp.title}
                </h3>
                <div className="text-gray-600 font-semibold mb-3">
                  {exp.company}
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
              
              <div className="hidden md:block w-2/12 flex justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;