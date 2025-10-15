// src/components/HowItWorks.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

// Data for the helmet cleaner steps is now defined here.
// You can move this back to appData.jsx if you prefer.
const helmetCleanerSteps = [
  {
    number: 1,
    title: '1. Start Button',
    description: 'Select the Start button on the display to begin the process.'
  },
  {
    number: 2,
    title: 'Make Payment',
    description: 'Choose your preferred payment method and complete the payment.'
  },
  {
    number: 3,
    title: '3. Place the Helmet',
    description: 'Once the payment is confirmed, the cabinet lock will release. Place your helmet inside and securely lock the cabinet.'
  },
  {
    number: 4,
    title: 'Collect & Go',
    description: 'Once the cleaning is done, the lock will be released. Collect your clean, fresh, and ready-to-wear helmet, and you’re good to go!'
  }
];

const StepCard = ({ step, themeClasses, totalSteps }) => (
  <div className="flex flex-col items-center text-center relative px-2 sm:px-4 mb-8 lg:mb-0">
    <div className={`w-10 h-10 md:w-12 md:h-12 bg-hygrow-blue text-white text-lg md:text-xl font-bold rounded-full flex items-center justify-center mb-3 md:mb-4 z-10 shadow-md`}>
      {step.number}
    </div>

    {/* This logic now correctly references the total number of steps passed as a prop */}
    {step.number < totalSteps && (
      <>
        {/* Horizontal line for desktop */}
        <div className={`hidden lg:block absolute top-6 right-0 h-0.5 w-1/2 -mr-16 ${themeClasses.textMuted.includes('400') ? 'bg-gray-700' : 'bg-gray-300'} z-0`}></div>
        {/* Vertical line for mobile */}
        <div className={`lg:hidden absolute bottom-[-30px] w-0.5 h-6 ${themeClasses.textMuted.includes('400') ? 'bg-gray-700' : 'bg-gray-300'} z-0`}></div>
      </>
    )}

    <h3 id={`step-title-${step.number}`} className={`text-base md:text-lg font-semibold mb-2 ${themeClasses.textDefault}`}>{step.title}</h3>
    <p className={`text-xs md:text-sm ${themeClasses.textMuted}`}>{step.description}</p>
  </div>
);

const HowItWorks = () => {
  const { themeClasses } = useTheme();

  return (
    <section id="how-it-works" className={`py-12 px-5 section-padding text-center ${themeClasses.bgDefault}`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${themeClasses.textDefault}`}>
        A Fresh Helmet in 4 Simple Steps
      </h2>
      <p className={`text-lg mb-10 ${themeClasses.textMuted}`}>
        Our automated kiosk makes helmet sanitization quick, easy, and contactless.
      </p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between relative">
        {helmetCleanerSteps.map((step) => (
          <StepCard
            key={step.number}
            step={step}
            themeClasses={themeClasses}
            totalSteps={helmetCleanerSteps.length}
          />
        ))}
      </div>

      {/* <button
        className={`mt-6 md:mt-10 ${themeClasses.btnPrimary}`}
        aria-label="Watch a demonstration video of the helmet cleaning process"
      >
        Watch the Demo Video
      </button> */}
    </section>
  );
};

export default HowItWorks;
