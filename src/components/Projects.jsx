import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#fff9f6] overflow-hidden"
    >
      {/* Dessins décoratifs */}
      <div className="absolute right-6 top-24 w-20 h-20 bg-orange-200 rounded-full opacity-70" />
      <div className="absolute right-10 top-52 w-6 h-6 bg-orange-400 rounded-full" />
      <div className="absolute left-6 bottom-24 w-28 h-28 bg-orange-100 rounded-3xl rotate-12" />
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-orange-200 rounded-tl-full" />

      {/* Contenu */}
      <div className="px-[10%] relative z-10">
        {/* Titre */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-40 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Contenu */}
              <div className="p-8">
                <h3 className="text-lg font-bold uppercase mb-3">
                  {idx + 1}. {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-gray-300 px-3 py-1 text-xs rounded-md font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions (Demo / GitHub) */}
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                    >
                      Voir la démo
                    </a>
                  )}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Bouton bas */}
        <div className="flex justify-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full shadow hover:bg-orange-600 transition">
            Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
