import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import R_Logo from '../Images/R_Logo.png';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white p-4 font-sans font-light">
      <div className="flex justify-between items-center">
        <div style={{ alignItems: "center" }} className="flex flex-row gap-10">
          {/* Logo */}
          <a href="#home" className="no-underline">
            <img src={R_Logo} alt="Logo" className="h-10" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 justify-start">
            <a href="#testimonials" className="text-black no-underline">
              {t('navbar.testimonials')}
            </a>
            <a href="#projects" className="text-black no-underline">
              {t('navbar.projects')}
            </a>
            <a href="#skills" className="text-black no-underline">
              {t('navbar.skills')}
            </a>
            <a href="#experiences" className="text-black no-underline">
              {t('navbar.experiences')}
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="mx-2 p-2 border rounded bg-white"
          >
            <option value="en">
              <span role="img" aria-label="English">🇬🇧</span> English
            </option>
            <option value="fr">
              <span role="img" aria-label="Français">🇫🇷</span> Français
            </option>
          </select>

          {/* Contact Button - Show this only on larger screens */}
          <a
            href="#contact"
            className="hidden md:block px-4 py-2 bg-superPurple text-white no-underline rounded-md font-light ml-4"
          >
            {t('navbar.contact')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{t('navbar.open_menu')}</span>
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
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full left-0 top-16 bg-white shadow-md z-10`}
          id="mobile-menu"
        >
          <a
            href="#testimonials"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {t('navbar.testimonials')}
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {t('navbar.projects')}
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {t('navbar.skills')}
          </a>
          <a
            href="#experiences"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {t('navbar.experiences')}
          </a>
          <a
            href="#contact"
            className="md:hidden block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {t('navbar.contact')}
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
