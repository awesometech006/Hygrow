import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks, companyInfo } from '../data/appData.jsx';

const Footer = () => {
  const footerBg = 'bg-hygrow-footer';
  const footerText = 'text-gray-400';
  const footerHeading = 'text-white';

  const footerLinks = navigationLinks.filter((link) => link.name !== 'Home');

  // Handle smooth scrolling for anchor links
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', '')); // Remove '#' from id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-10 px-5 ${footerBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 border-b border-gray-700 pb-8 md:text-left">
          <div className="md:w-1/3">
            <h4 className={`text-base font-semibold mb-4 ${footerHeading}`}>
              About Hygrow
            </h4>
            <p className={`text-xs ${footerText}`}>
              Revolutionizing vehicle maintenance with eco-friendly, self-service washing systems across Chennai.
            </p>
            {/* <p className={`text-xs mt-2 ${footerText}`}>UEN: {companyInfo.uen}</p> */}
          </div>

          <div className="md:w-1/3">
            <h4 className={`text-base font-semibold mb-4 ${footerHeading}`}>
              Quick Links
            </h4>
            <ul className="list-none p-0">
              {footerLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  {link.path.startsWith('#') ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleScroll(e, link.path)}
                      className={`text-xs ${footerText} hover:text-hygrow-blue transition duration-300`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-xs ${footerText} hover:text-hygrow-blue transition duration-300`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3">
            <h4 className={`text-base font-semibold mb-4 ${footerHeading}`}>
              Contact & Info
            </h4>
            <p className={`text-xs ${footerText}`}>
              Email:{' '}
              <a href={`mailto:${companyInfo.email}`} className="underline">
                {companyInfo.email}
              </a>
            </p>
            <p className={`text-xs ${footerText}`}>
              Mobile No:{' '}
              <a href={`tel:${companyInfo.number}`} className="underline">
                {companyInfo.number}
              </a>
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
