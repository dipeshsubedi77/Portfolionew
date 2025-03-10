import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { FloatingNavDemo } from '../Components/FloatingNavDemo'
import Homepage from './Home'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => {
  return (
    

    <BrowserRouter>

            <FloatingNavDemo />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
      
        </BrowserRouter>

      
   
    
  
  )
}

export default Portfolio