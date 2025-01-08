import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="main flex flex-col items-center px-4 lg:px-0">
        <div className="card flex flex-col lg:flex-row p-4 items-center my-10 lg:my-24 lg:ml-72">
          <div className="xl:-ml-32 img mb-6 lg:mb-0">
            <img
              srcSet="../images/Profilepicture.png"
              alt="profile picture"
              className="w-40 lg:w-60 rounded-full shadow-2xl transform transition hover:scale-110 hover:ring-4 hover:ring-cyan-500"
            />
          </div>

          <div className="info flex flex-col text-gray-400 text-center lg:text-left lg:m-auto lg:mx-5">
            <div className="text-2xl lg:text-3xl italic">
              Hello! I'm{' '}
              <span className="text-4xl lg:text-5xl text-white">
                Prathamesh R Bhumkar
              </span>
            </div>
            <div className="text-xl lg:text-3xl">Software Engineer</div>
            <div className="text-sm lg:text-lg text-gray-400 flex justify-center lg:justify-start items-center mt-3">
              <img
                srcSet="../images/icons8-degree-32.png"
                alt="degree image"
                className="w-6 lg:w-9 -rotate-45 mr-2"
              />
              <span className="text-yellow-400">Bachelor of Engineering - CSE</span>
            </div>
            <div className="flex flex-col lg:flex-row mt-3 space-y-3 lg:space-y-0 lg:space-x-2 text-sm text-white">
              <Link to="mailto:prathamesh.bhumkar13@gmail.com">
                <button className="border-2 border-white py-2 px-3 rounded-md font-bold hover:bg-white hover:text-blue-950 transition-colors ease-out delay-100 w-full lg:w-auto">
                  p.r.bhumkar13@gmail.com
                </button>
              </Link>
              <Link to="tel:+91-8788688475">
                <button className="border-2 border-white py-2 px-3 rounded-md font-bold hover:bg-white hover:text-blue-950 transition-colors ease-out delay-100 w-full lg:w-auto">
                  +91-8788688475
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="about w-full lg:w-2/5 px-4 py-2 bg-gray-800 rounded-lg shadow-2xl text-white m-auto ring-2 ring-blue-900 mb-10">
          <div className="p-2 text-xl">About me</div>
          <hr className="w-full mb-3" />
          <div className="p-2 text-justify italic text-sm lg:text-base">
            Computer Engineering graduate with expertise in Java, Python,
            JavaScript, SQL. Seeking a Software Development role to apply my
            skills in designing, developing, and maintaining software
            applications.
          </div>
          <div className="flex space-x-3 p-2">
            <div>
              <img
                srcSet="../images/a.jpg"
                alt="location"
                className="w-8 lg:w-10 rounded-xl"
              />
            </div>
            <div className="tracking-wide">Pune, Maharashtra</div>
          </div>
          <Link
            to="https://www.linkedin.com/in/prathameshbhumkar-5a8b26259"
            target="_blank"
          >
            <div className="flex space-x-3 p-2">
              <div>
                <img
                  srcSet="../images/LinkedIn.png"
                  alt="LinkedIn"
                  className="w-8 lg:w-10 rounded-xl"
                />
              </div>
              <div className="italic underline underline-offset-4 hover:text-blue-700">
                www.linkedin.com/in/prathameshbhumkar-5a8b26259
              </div>
            </div>
          </Link>

          <div className="mt-5 p-2 text-xl">Skills</div>
          <hr className="w-full mb-3" />
          <div className="skill flex flex-col space-y-3">
            <div className="text-center text-lg underline underline-offset-4">
              Programming Language
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/java.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="Java"
                />
                Java
              </div>
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/python.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="Python"
                />
                Python
              </div>
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/js.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="JavaScript"
                />
                JavaScript
              </div>
            </div>
            <div className="text-center text-lg underline underline-offset-4">
              Database
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/mysql.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="MySQL"
                />
                MySQL
              </div>
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/MongoDB.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="MongoDB"
                />
                MongoDB
              </div>
            </div>
            <div className="text-center text-lg underline underline-offset-4">
              Framework
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/react.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="ReactJS"
                />
                ReactJS
              </div>
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/tailwind.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="Tailwind CSS"
                />
                Tailwind CSS
              </div>
              <div className="flex flex-col items-center">
                <img
                  srcSet="../images/skills/bootstrap.png"
                  className="w-12 lg:w-16 rounded-lg"
                  alt="Bootstrap"
                />
                Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
