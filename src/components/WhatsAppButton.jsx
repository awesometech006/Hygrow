// src/components/WhatsAppButton.jsx
import React from 'react';
import { companyInfo } from '../data/appData.jsx'
import WhatsappGif from '../assets/whatsapp-logo.gif'
const WHATSAPP_NUMBER = companyInfo.whatsappNumber; 

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-4 right-4  z-50 rounded-full bg-green-500 hover:bg-green-600 shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Chat with Hygrow on WhatsApp" 
    >
      {/* <svg 
        className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" 
      >
        <path d="M12.001 2.001A9.998 9.998 0 0 0 2 12.001c0 2.858.74 5.56 2.14 7.94l-2.14 2.06 4.2-1.12c2.1.86 4.3 1.34 6.1 1.12A9.998 9.998 0 0 0 12 2.001zM17.41 15.06c-.34.54-.77.58-1.2.2-1.46-.86-3.7-1.8-4.4-1.9-.7-.1-1.1.3-1.4.5s-.6.4-1.1.5c-.5.1-1-.1-1.4-.4-.5-.3-1.1-1.1-1.6-2.1-.5-.9-.5-1.5-.1-1.8s.7-.5 1-.8c.3-.2.6-.4.9-.7.3-.2.5-.4.7-.6s.4-.3.6-.5c.2-.2.4-.4.5-.6.3-.5.1-1-.2-1.4-.3-.4-1.2-1.5-1.6-2.1-.4-.6-.8-.5-1.1-.5-.3 0-.7 0-1.1 0-.4 0-.8.1-1.1.4-.3.3-.8.8-1.2 1.5-.4.7-.7 1.6-.7 2.6 0 1 .3 2 1.1 3s1.7 1.8 2.8 2.2c1.1.4 2.2.3 3.1.2.9-.1 1.6-.4 2.2-.6.6-.2 1.1-.6 1.5-.9.4-.3.8-.7 1-.1.2.6.2 1.2.2 1.4 0 .3 0 .7-.1 1.1s-.1.7-.3 1z"/>
      </svg> */}
       <img className="w-12 h-12" src={WhatsappGif} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
