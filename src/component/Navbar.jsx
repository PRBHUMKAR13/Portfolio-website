import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="flex items-center p-3 bg-gray-900 text-white justify-between">

    <Link to="/"> <div className="px-10 text-3xl font-medium font-serif"> Prathamesh's Portfolio</div> </Link> 

    <button className="text-2xl md:hidden px-4" onClick={toggleMenu} aria-label="Toggle Menu"> =☰=</button>

    <ul
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } absolute top-16 left-0 w-full bg-gray-900 md:flex md:relative md:top-0 md:left-0 md:w-auto md:space-x-6 text-lg pr-9 items-center font-sans font-medium cursor-pointer`}
    >
      <Link to="./home"><li className="hover:text-blue-700 px-4 py-2 md:py-0">Home</li></Link>
      <Link to="./project"> <li className="hover:text-blue-700 px-4 py-2 md:py-0">Project</li> </Link>
      <Link to="./resume"><li className="hover:text-blue-700 px-4 py-2 md:py-0">Resume</li></Link>
      <Link to="./contact"><li className="hover:text-blue-700 px-4 py-2 md:py-0">Contact</li></Link>
    </ul>
  </nav>

  )
}

export default Navbar