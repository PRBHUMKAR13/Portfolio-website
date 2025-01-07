import React from 'react'
import '../App.css'
const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-4">

            <div className="bg-white shadow-lg rounded-2xl w-full max-w-xs overflow-hidden transform hover:scale-105 transition-transform duration-300  h-full">

                <div className="aspect-video">
                    <img src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover shadow-xl ring-4 ring-pink-500 transform hover:scale-150 transition-transform duration-300 " />
                </div>

                <div className="p-4">

                    <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>

                    <p className="text-gray-600 text-sm mb-3 text-justify line-clamp-3 overflow-y-auto custom-scrollbar">
                        {project.description}
                    </p>


                    <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-cyan-700 text-white text-sm px-2 py-1 rounded-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-4 text-sm">
                        <a href={project.githubLink} className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg  font-semibold  transition">
                            GitHub
                        </a>
                        {project.liveDemoLink && (
                            <a href={project.liveDemoLink} className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg  font-semibold  transition">
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