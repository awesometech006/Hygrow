// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeatureCards from './components/FeatureCards'; 
import HowItWorks from './components/HowItWorks';
import HelperMachines from './components/HelperMachines';
import HelmetBenefits from './components/HelmetBenefits.jsx';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 
import { useTheme } from './context/ThemeContext.jsx';

const HomeLayout = () => (
  <main>
    <HeroSection />
    <FeatureCards />
    <HowItWorks />
    <HelmetBenefits /> 
    <HelperMachines />
    {/* <Locations /> */}
    <ContactForm />
  </main>
);

function App() {
  const { themeClasses } = useTheme(); 
  return (
    <div className={`min-h-screen ${themeClasses.bgDefault}`}> 
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="*" element={<HomeLayout />} /> 
      </Routes>
      <Footer />
      
      <WhatsAppButton /> 
    </div>
  );
}

export default App;