import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="flex  p-3 bg-gray-900 text-white justify-between ">
    <Link to="/"><div className=" px-10 text-3xl font-medium font-serif">
      Prathamesh's Portfolio
    </div></Link> 
    <ul className="flex space-x-6 text-lg pr-9 items-center font-sans font-medium cursor-pointer  ">
      <Link to="./home">   <li className="hover:text-blue-700">Home</li></Link> 
      <Link to="./project">  <li className="hover:text-blue-700">Project</li></Link> 
   <Link to="./resume"><li className="hover:text-blue-700">Resume</li></Link> 
   <Link to="./contact">   <li className="hover:text-blue-700">Contact</li></Link> 
    </ul>
  </nav>

  )
}

export default Navbar