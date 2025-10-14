import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { navigationLinks } from '../data/appData.jsx';
import Hygrow from '../assets/hygrow3.jpeg';

const Header = () => {
  const { theme, toggleTheme, themeClasses } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900 border-gray-700';
  const textColor = theme === 'light' ? 'text-hygrow-dark' : 'text-gray-200';
  const linkHoverColor = theme === 'light' ? 'hover:text-hygrow-blue' : 'hover:text-blue-400';

  // Handle smooth scrolling for anchor links
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', '')); // Remove '#' from id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header
      className={`sticky top-0 z-40 py-4 px-6 flex justify-between items-center border-b border-gray-200 shadow-md ${bgColor}`}
    >
      <div className="flex items-center">
        <Link to="/" className={`text-xl font-bold ${textColor}`}>
          <img src={Hygrow} alt="Hygrow Logo" className="h-12" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('#') ? (
                <a
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className={`font-medium ${textColor} ${linkHoverColor} transition duration-300`}
                  aria-current={
                    window.location.hash === link.path ? 'page' : undefined
                  }
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`font-medium ${textColor} ${linkHoverColor} transition duration-300`}
                  aria-current={
                    window.location.pathname === link.path ? 'page' : undefined
                  }
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Controls & CTA */}
      <div className="flex space-x-3 items-center">
        {/* <button
          className={`hidden sm:block ${themeClasses.btnPrimary} px-3 py-2 text-sm`}
          aria-label="Find a vehicle wash location near you"
        >
          Contact Us
        </button> */}

        {/* <button
          onClick={toggleTheme}
          className={`px-3 py-1 border rounded-lg text-sm transition duration-300 ${textColor} ${theme === 'light' ? 'border-gray-300 hover:bg-gray-100' : 'border-gray-600 hover:bg-gray-800'}`}
          aria-label={`Switch site theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button> */}

        {/* Mobile Menu Button (Hamburger) */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
          <svg className={`w-6 h-6 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full p-4 border-b shadow-md ${bgColor}`}
        >
          <nav>
            <ul className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('#') ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleScroll(e, link.path)}
                      className={`block py-2 font-medium ${textColor} ${linkHoverColor}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 font-medium ${textColor} ${linkHoverColor}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  className={`w-full mt-2 ${themeClasses.btnPrimary} py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find a Location
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
