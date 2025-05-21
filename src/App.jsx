import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';


import HeroSection from './components/HeroSection';
import { Experience } from './components/Experience';
import { Achivement } from './components/Achivement';
import { Project } from './components/Project';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function MainContent() {
  const location = useLocation();

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementRef = useRef(null);
  const certificationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className= "max-w-full"><Navbar scrollToSection={scrollToSection} refs={{
        homeRef, experienceRef, projectRef, skillsRef, achievementRef, certificationRef, contactRef
      }} /></div>
      <div className="bg-[#04052E]">
        <div ref={homeRef}><HeroSection /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={projectRef}><Project /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={achievementRef}><Achivement /></div>
        <div ref={certificationRef}><Certification /></div>
        <div ref={contactRef}><Footer /></div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
