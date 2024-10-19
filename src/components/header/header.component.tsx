import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav aria-label="nav-bar" className="flex flex-nowrap justify-between items-center w-full p-4 flex-row h-20 bg-red-50 fixed top-0">
      <section aria-label="name" className="font-sans">
        <span className="text-xl md:text-2xl font-extrabold">Neha Gupta</span>
        <span className="text-lg md:text-xl">&nbsp;/&nbsp;</span>
        <span className="text-lg md:text-xl">Full Stack Developer</span>
      </section>

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation links */}
      <section
        aria-label="nav-links"
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex w-full md:w-auto mt-4 md:mt-0 font-sans`}
      >
        <div className="flex flex-col md:flex-row md:gap-4">
          <a href="#about-me" className="py-2 md:py-0">ABOUT ME</a>
          <a href="#resume" className="py-2 md:py-0">RESUME</a>
          <a href="#projects" className="py-2 md:py-0">PROJECTS</a>
          <a href="#contact" className="py-2 md:py-0">CONTACT</a>
        </div>
      </section>
    </nav>
  )
}

export default NavBar;
