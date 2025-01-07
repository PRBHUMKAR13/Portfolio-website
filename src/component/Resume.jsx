import React from 'react'

const Resume = () => {
  return (
    
  <div className="main flex justify-center items-center p-10  ">

  <div className="flex flex-col items-center bg-gray-900 rounded-lg shadow-2xl p-8 max-w-lg transform transition hover:scale-110">
 
    <img src="../images/Resume.png" alt="Resume" className="w-80 h-full mb-4 rounded-lg"/>
 
    <a href="../images/Prathamesh Bhumkr Resume.pdf" download>
      <button className="border-2 border-white  text-white  hover:bg-white hover:text-blue-950 py-2 px-6 rounded-md font-bold  transition duration-200">
        Download Resume
      </button>
    </a>
  </div>
</div>
  )
}

export default Resume