import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="main flex-col">

<div className="card flex p-4 align-middle my-24 ml-72">

  <div className="img ">
    <img srcSet="../Profilepicture.png" alt="profile picture" className="w-60 rounded-full shadow-2xl transform transition hover:scale-110 hover:ring-4 hover:ring-cyan-500"/>
  </div>

  <div className="info flex-col text-gray-400 m-auto mx-5">
    <div className="text-3xl  italic ">Hello! I'm <span className="text-5xl text-white">Prathamesh R Bhumkar</span>
    </div>
    <div className="text-3xl">Software Engineer</div>
    <div className="text-lg text-gray-400 flex ">
      <img srcSet="../icons8-degree-32.png" alt="degree image"  className="size-9 -rotate-45  "/>
    <span className="mt-1 text-yellow-400">
      Bachelor of Engineering- CSE
    </span>
    </div>
    <div className="flex mt-3 space-x-2 text-sm text-white">

     <Link to="mailto:prathamesh.bhumkar13@gmail.com"> <button className="border-2 border-white py-2 px-3 rounded-md font-bold hover:bg-white hover:text-blue-950 transition-colors ease-out delay-100">
        p.r.bhumkar13@gmail.com</button></Link>

      <Link to="tel:+91-8788688475"> <button className=" border-2 border-white py-2 px-3 rounded-md font-bold hover:bg-white hover:text-blue-950 transition-colors ease-out delay-100 ">+91-8788688475</button></Link>
    </div>
  </div>

</div>

<div className="about w-2/5 px-4 py-2 h-auto bg-gray-800 rounded-lg shadow-2xl text-white m-auto ... ring-2 ring-blue-900 mb-10">
  <div className=" p-2 text-xl ">About me</div>
  <hr className="w-full mb-3 "/>

  <div className="p-2 text-justify -mt-3 italic">Computer Engineering graduate with
    expertise in Java, Python, JavaScript,
    SQL. Seeking a Software Development
    role to apply my skills in designing,
    developing, and maintaining software
    applications.</div>

  <div className="flex space-x-3 p-2">
    <div><img srcSet="../a.jpg" alt="location" className="size-6 rounded-xl"/></div>
    <div className="tracking-wide ...">Pune, Maharashtra</div>
  </div>
  <Link to="https://www.linkedin.com/in/prathameshbhumkar-5a8b26259" target="_blank" > <div className="flex space-x-3 p-2">
   <div><img srcSet="../LinkedIn.png" alt="location" className="size-6 rounded-xl"/></div>
    <div className="italic underline underline-offset-4 hover:text-blue-700">www.linkedin.com/in/prathameshbhumkar-5a8b26259</div>
  </div></Link> 

  <div className="mt-5 p-2 text-xl">Skills</div>
  <hr className="w-full mb-3 "/>
  <div className="skill flex-col space-y-3">
    <div className="text-center text-lg underline underline-offset-4 ">Programming Language</div>
    <div className="flex space-x-8 justify-center">
      <div className="item-center">
        <img srcSet="../images/skills/java.png" className="size-12 rounded-lg align-middle self-center" alt=""/>Java
      </div>
      <div>
        <img srcSet="../images/skills/python.png" className="size-12 rounded-lg" alt=""/>Python
      </div>
      <div>
        <img srcSet="../images/skills/js.png" className="size-12 rounded-lg" alt=""/>Javascript
      </div>
    </div>
    <div  className="text-center text-lg underline underline-offset-4">Database</div>
    <div className="flex space-x-8 justify-center">
      <div className="item-center">
        <img srcSet="../images/skills/mysql.png" className="size-12 w-16 -ml-1  rounded-xl align-middle self-center" alt=""/>MySQL
      </div>
      <div>
        <img srcSet="../images/skills/MongoDB.png" className=" ml-2 size-12 rounded-lg" alt=""/>MongoDB
      </div>
      
  </div>
  <div  className="text-center text-lg underline underline-offset-4 ">Framework</div>
    <div className="flex space-x-8 justify-center">
      <div className="item-center">
        <img srcSet="../images/skills/react.png" className="size-12 rounded-xl align-middle self-center" alt=""/>ReactJS
      </div>
      <div>
        <img srcSet="../images/skills/tailwind.png" className="size-12 ml-6 rounded-xl" alt=""/>Tailwind CSS
      </div>
      <div>
        <img srcSet="../images/skills/bootstrap.png" className="size-12  ml-2 rounded-xl" alt=""/>Bootstrap
      </div>
    </div>
</div>
</div>
</div>
    
    
    </>
  )
}

export default Home