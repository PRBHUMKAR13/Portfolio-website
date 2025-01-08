import React from 'react'
import '../App.css'
const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-4">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm md:max-w-md overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full">
          
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover shadow-lg rounded-t-2xl transition-transform duration-300"
            />
          </div>
  
         
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
  
            <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-3">
              {project.description}
            </p>
  
         
            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-cyan-700 text-white text-sm px-2 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
  
        
            <div className="flex space-x-4 mt-4">
              <a href={project.githubLink} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                GitHub
              </a>
              {project.liveDemoLink && (
                <a href={project.liveDemoLink} target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard