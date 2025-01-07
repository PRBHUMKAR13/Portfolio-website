import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Resume from "./component/Resume";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from './component/Footer'
function App() {
  

  return (
    <>
    <div className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] h-full"'>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

      <Footer/>
    </div>
    </>
  )
}

export default App
