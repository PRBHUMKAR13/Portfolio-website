import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
const Project = () => {
    const project_info = [
      
        {
            title: "Hand Gesture Controller",
            description: "A deep learning-based project that uses computer vision techniques to control devices through hand gestures. It employs TensorFlow and OpenCV to recognize and interpret hand movements in real-time.",
            imageUrl: "../images/HandGesture UI.png",
            techStack: ["Python",  "OpenCV", "Deep Learning", "TensorFlow","Scikit-learn","CNN",  "Django"],
            githubLink: "https://github.com/your-github-repo",
            
        },  {
            title: "News App",
            description: "A React-based news app that fetches news articles from various categories like sports, entertainment, and business using a News API. Users can read the latest headlines, browse by category, and stay updated on current events.",
            imageUrl: "../images/NewsApp UI.png",
            techStack: ["ReactJS", "API Integration", "CSS", "Bootstrap", "Routing"],
            githubLink: "https://github.com/your-github-repo",
            liveDemoLink: "https://your-live-demo-link.com"
        }
    ];
    return (
        <div className='min-h-screen'>
            <div className="flex flex-col items-center justify-center  text-gray-400">

                <div className="text-5xl text-white my-12 text-center"> Here are My Projects</div>

                <div className="flex flex-wrap justify-center gap-8 p-4 w-full max-w-8xl gap-y-10">
                {project_info.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
               
                
                
            </div>

            </div>
        </div>
    )
}

export default Project