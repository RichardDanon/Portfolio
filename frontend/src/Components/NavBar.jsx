import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 font-sans font-light">
      <div className="flex justify-between items-center">

      <div style={{alignItems: "center"}} className='flex flex-row gap-10'>
        {/* Logo/Brand Name */}
        <a href="#home" className="text-black no-underline text-2xl font-bold">
          My Logo
        </a>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-4 justify-start"> {/* Adjusted class here */}
          <a href="#testimonials" className="text-black no-underline">
            Testimonials
          </a>
          <a href="#projects" className="text-black no-underline">
            Projects ▼
          </a>
          <a href="#skills" className="text-black no-underline">
            Skills
          </a>
          <a href="#experiences" className="text-black no-underline">
            Experiences ▼
          </a>
        </div>
      </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white sm:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed */}
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          {/* Icon when menu is open */}
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:hidden absolute w-full left-0 top-16 bg-white shadow-md z-10`}
          id="mobile-menu"
        >
          <a
            href="#testimonials"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Testimonials
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Skills
          </a>
          <a
            href="#experiences"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Experiences
          </a>
          {/* Contact Button - Show this as a simple link on smaller screens */}
          <a
            href="#contact"
            className="sm:hidden block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>

        {/* Contact Button - Show this only on larger screens */}
        <a
          href="#contact"
          className="hidden sm:block px-4 py-2 bg-superPurple text-white no-underline rounded-md font-light"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default NavBar;
