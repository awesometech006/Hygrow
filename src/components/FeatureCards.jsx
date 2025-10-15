// src/components/FeatureCards.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { featuresData } from '../data/appData.jsx'; 

const FeatureCard = ({ title, description, icon, alt, themeClasses }) => (
  <div className={`p-6 md:p-8 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 ${themeClasses.card}`} role="group" aria-label={`Feature: ${title}`}>
    <span className="text-3xl md:text-4xl text-hygrow-accent-green block mb-3 md:mb-4" role="img" aria-label={alt}>{icon}</span>
    
    <h3 className={`text-lg md:text-xl font-semibold mb-3 text-hygrow-blue`}>{title}</h3>
    
    <p className={`text-sm md:text-base leading-relaxed ${themeClasses.textMuted}`}>
      {description}
    </p>
  </div>
);

const FeatureCards = () => {
  const { themeClasses } = useTheme();

  return (
    <section id="features" className={`pb-12 px-5 section-padding text-center ${themeClasses.bgSecondary}`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-10 ${themeClasses.textDefault}`}>
        Why Choose Hygrow?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} themeClasses={themeClasses} />
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
