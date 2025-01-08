import React from 'react'

const Resume = () => {
  return (
    
<div className="main flex justify-center items-center p-6 md:p-10 min-h-screen md:bg-none">
      <div className="flex flex-col items-center bg-gray-900 md:bg-none rounded-lg shadow-2xl p-6 md:p-8 max-w-sm md:max-w-lg transform transition hover:scale-105">
        {/* Resume Image */}
        <img
          src="../images/Resume.png"
          alt="Prathamesh Bhumkar's Resume"
          className="w-full h-auto mb-6 rounded-lg object-contain"
        />

        <a href="../images/Prathamesh Bhumkr Resume.pdf" download  aria-label="Download Resume" className="w-full text-center">
          <button className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 py-2 px-6 rounded-md font-bold transition duration-200">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Resume