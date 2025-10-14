// src/components/HelperMachines.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { productData } from '../data/appData.jsx';
import HelperMachine from '../assets/machine1.png'

// SVG icon for features list
const CheckmarkIcon = () => (
  <svg className="w-5 h-5 text-hygrow-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const HelperMachines = () => {
  const { themeClasses } = useTheme();

  // Find the helmet cleaner data specifically from your appData file
  const helmetCleanerData = productData.find(product => product.name.includes("Helmet Cleaning System"));

  // If no data is found, don't render the component
  if (!helmetCleanerData) {
    return null;
  }

  return (
    <section id="featured-product" className={`py-16 section-padding ${themeClasses.bgSecondary}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${themeClasses.textDefault}`}>
            The Ultimate Helmet Care Solution
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${themeClasses.textMuted}`}>
            Our state-of-the-art kiosk provides sanitization for your helmet in minutes, ensuring safety and freshness for every ride.
          </p>
        </div>

        <div className={`rounded-2xl ${themeClasses.card} shadow-lg overflow-hidden`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Image Placeholder Column */}
            <div className="w-full h-64 lg:h-full min-h-[300px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={HelperMachine}
                alt="Helmet Cleaning Machine"
                className="w-full h-auto max-h-[500px] object-contain rounded-lg"
              />
            </div>


            {/* Content Column */}
            <div className="p-8 md:p-10 text-left">
              <h3 className={`text-xl md:text-2xl font-bold mb-4 text-hygrow-blue`}>
                {helmetCleanerData.name}
              </h3>
              <p className={`text-base mb-6 ${themeClasses.textMuted}`}>
                {helmetCleanerData.description}
              </p>

              <ul className="list-none p-0 mb-8 space-y-3" aria-label={`${helmetCleanerData.name} features`}>
                {helmetCleanerData.features.map((feature, index) => (
                  <li key={index} className={`text-sm md:text-base flex items-center ${themeClasses.textDefault}`}>
                    <CheckmarkIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <button
                className={`w-full md:w-auto px-8 py-3 text-base rounded-lg font-semibold transition duration-300 text-white bg-hygrow-blue hover:bg-hygrow-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hygrow-blue`}
                aria-label={`Find a location with the ${helmetCleanerData.name}`}
              >
                Find a Kiosk
              </button> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HelperMachines;
