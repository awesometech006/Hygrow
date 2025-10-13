// src/components/HelmetBenefits.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { helmetBenefits } from '../data/appData.jsx';

const BenefitCard = ({ icon, title, points, themeClasses }) => (
    <div className={`p-6 rounded-xl text-left transition duration-300 transform hover:shadow-lg ${themeClasses.card}`} role="group" aria-labelledby={`benefit-title-${title.replace(/\s/g, '-')}`}>

        <span className="text-3xl block mb-4" role="img" aria-hidden="true">{icon}</span>

        <h3 id={`benefit-title-${title.replace(/\s/g, '-')}`} className={`text-xl font-semibold mb-4 text-hygrow-blue border-b border-gray-200 dark:border-gray-700 pb-2`}>
            {title}
        </h3>

        <ul className="list-none p-0 space-y-3">
            {points.map((point, index) => (
                <li key={index} className={`text-sm flex items-start ${themeClasses.textDefault}`}>
                    <span className="text-hygrow-accent-green font-bold text-lg leading-none mr-2 mt-[-1px]">✓</span>
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const HelmetBenefits = () => {
    const { themeClasses } = useTheme();

    return (
        <section id="helmet-benefits" className={`py-12 text-center ${themeClasses.bgDefault}`}>

            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${themeClasses.textDefault}`}>
                {helmetBenefits.title}
            </h2>
            <p className={`text-base md:text-lg mb-12 max-w-3xl mx-auto ${themeClasses.textMuted}`}>
                {helmetBenefits.summary}
            </p>

            {/* Grid: Stacks on mobile, 3 columns on desktop */}
            <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {helmetBenefits.sections.map((section, index) => (
                    <BenefitCard key={index} {...section} themeClasses={themeClasses} />
                ))}
            </div>
        </section>
    );
};

export default HelmetBenefits;