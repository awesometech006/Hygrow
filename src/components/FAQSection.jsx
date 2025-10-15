// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { faqData } from '../data/appData.jsx'; // <-- Import FAQ data

// --- AccordionItem Component (Thematic Styling Applied) ---
const AccordionItem = ({ faq, isOpen, onClick, themeClasses }) => {
    return (
        <div className={`border-b ${themeClasses.textDefault.includes('dark') ? 'border-gray-700' : 'border-gray-200'} py-4`}>
            <button
                className={`w-full flex justify-between items-center text-left ${themeClasses.textDefault} focus:outline-none`}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-base md:text-lg font-medium">{faq.question}</h3>
                <span className="transform transition-transform duration-300">
                    {isOpen ? (
                        // Minus icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-hygrow-blue"><path d="M5 12h14" /></svg>
                    ) : (
                        // Plus icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-hygrow-blue"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
            >
                <p className={`text-sm ${themeClasses.textMuted} leading-relaxed`}>
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};


// --- Main FAQ Component (Thematic Styling Applied) ---
const FAQSection = () => {
    const { themeClasses } = useTheme();
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={`pb-12 px-5 section-padding flex items-center justify-center ${themeClasses.bgSecondary}`}>
            <div className={`w-full max-w-4xl mx-auto rounded-2xl shadow-xl p-6 md:p-10 ${themeClasses.card}`}>
                <h2 className={`text-3xl md:text-4xl font-bold text-center ${themeClasses.textDefault} mb-3`}>
                    Frequently Asked Questions
                </h2>
                <p className={`text-center ${themeClasses.textMuted} mb-8 text-base`}>
                    Have questions about our innovative helmet cleaning process? We've got answers.
                </p>

                <div className="space-y-2">
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                            themeClasses={themeClasses}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
