import { useState } from 'react'
import React from "react";
import "./index.css"; 
import HeroSection from './components/HeroSection';
import { Experience } from './components/experience';
import { Achivement } from './components/Achivement';
import { Project } from './components/Project';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#04052E]'>
        <HeroSection/>
        <Experience/>
        <Project/>
        <Skills/>
        <Achivement/>
        <Certification/>
        <Footer/>
      </div>
    </>
  )
}

export default App
