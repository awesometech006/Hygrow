// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Define the full set of Tailwind classes for each theme
const themeDefinitions = {
    light: {
        bgDefault: 'bg-white',
        bgSecondary: 'bg-hygrow-light-bg', // Using custom color
        textDefault: 'text-hygrow-dark',   // Using custom color
        textMuted: 'text-gray-600',
        btnPrimary: 'btn-primary',         // Using custom component class
        card: 'bg-white shadow-lg border border-gray-200',
    },
    dark: {
        bgDefault: 'bg-gray-900',
        bgSecondary: 'bg-gray-800', 
        textDefault: 'text-gray-200',
        textMuted: 'text-gray-400',
        btnPrimary: 'btn-primary',
        card: 'bg-gray-800 shadow-lg border border-gray-700',
    }
};

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        toggleTheme,
        themeClasses: themeDefinitions[theme]
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};