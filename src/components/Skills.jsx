import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Compétences</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="text-gray-700 py-1 px-3 bg-orange-50 rounded-lg inline-block mr-2 mb-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;