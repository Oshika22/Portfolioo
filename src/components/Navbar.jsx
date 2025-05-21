import { useState, useEffect } from 'react';

function Navbar({ scrollToSection, refs }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <nav className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 px-6 md:px-16 py-4 ${
      scrolled ? 'bg-[#04052E] shadow-md backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 cursor-pointer"
          onClick={() => handleNavClick(refs.homeRef)}
        >
          
        </h1>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul className={`md:flex md:items-center gap-8 text-white font-medium transition-all duration-300 ${
          menuOpen ? 'absolute top-[70px] left-0 w-full bg-[#04052E] py-4 px-6 flex flex-col items-start space-y-4' : 'hidden md:flex'
        }`}>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.homeRef)}>Home</li>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.experienceRef)}>Experience</li>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.projectRef)}>Projects</li>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.skillsRef)}>Skills</li>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.achievementRef)}>Achievements</li>
          <li className="cursor-pointer hover:text-purple-400" onClick={() => handleNavClick(refs.certificationRef)}>Certifications</li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
