// src/components/Locations.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { popularDistricts } from '../data/appData.jsx';

const Locations = () => {
  const { themeClasses } = useTheme();

  return (
    <section id="locations" className={`py-12 section-padding ${themeClasses.bgDefault}`}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">

        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${themeClasses.textDefault}`}>
            Find a Hygrow Helmet Cleaning Kiosk Near You
          </h2>
          <p className={`text-base mb-6 ${themeClasses.textMuted}`}>
            With dozens of convenient kiosks placed at malls, transport hubs, and community centers across Singapore, a quick, hygienic clean for your helmet is always just around the corner.
          </p>

          <h3 className={`text-lg font-semibold mt-6 mb-3 text-hygrow-blue`}>Popular Districts:</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start list-none p-0" aria-label="List of popular service districts">
            {popularDistricts.map(district => (
              <li key={district} className={`text-sm ${themeClasses.textDefault}`}>{district}</li>
            ))}
          </ul>

          <p className="mt-8">
            <a href="/full-map-list" className={`font-semibold text-base border-b-2 ${themeClasses.textDefault} hover:text-hygrow-blue hover:border-hygrow-blue border-gray-800 dark:border-gray-300 transition duration-300`} aria-label="View the full interactive map and list of all Hygrow kiosk locations">
              View Full Interactive Map and Address List →
            </a>
          </p>
        </div>

        <div className="flex-1 w-full mt-6 lg:mt-0">
          <div className="w-full h-80 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..." // replace this with your map link
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hygrow Kiosk Locations Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;