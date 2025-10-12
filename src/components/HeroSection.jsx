// src/components/HeroSection.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
// IMPORTANT: Place the image file at the specified path
import HelperMachine from '../assets/machine1.png'

const HeroSection = () => {
  const { themeClasses } = useTheme();

  return (
    <section id="home" className={`px-4 section-padding flex flex-col lg:flex-row items-center gap-10 min-h-[450px] ${themeClasses.bgSecondary} overflow-hidden`}>

      {/* Text Content */}
      <div className="flex-1 max-w-xl text-center lg:text-left">
        <h1 className={`text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight ${themeClasses.textDefault}`}>
          A Revolution in Helmet Hygiene
        </h1>
        <p className={`text-base md:text-lg mb-8 ${themeClasses.textMuted}`}>
          Fast, automated sanitization for your helmet. Our self-service kiosks clean, dry, and deodorize in under 10 minutes.
        </p>

        <div className="flex justify-center lg:justify-start gap-3 sm:gap-5 flex-wrap">
          <button className={`${themeClasses.btnPrimary} text-sm sm:text-base ${themeClasses.textMuted}`} aria-label="Find nearest Hygrow Helmet Cleaning Kiosk">
            Find a Kiosk Near You
          </button>

          <button className={`btn-secondary text-sm sm:text-base ${themeClasses.textMuted}`}>
            How It Works
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={HelperMachine}
          alt="Hygrow Helmet Cleaning Kiosk"
          className="w-full max-w-[280px] md:max-w-xs object-contain"
          style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;