import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets Réalisés</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-orange-500">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;