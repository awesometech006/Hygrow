// src/data/appData.js

export const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Systems', path: '/systems' },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', 'path': '/about' },
    { name: 'Contact', path: '/contact' },
];

export const featuresData = [
    { 
        title: "80-90% Water Saving", 
        description: "Our advanced technology uses minimal water compared to traditional car wash methods, making us the eco-friendly choice.",
        icon: '💧',
        alt: 'Water droplet icon'
    },
    { 
        title: "70+ Locations", 
        description: "Conveniently located in HDB carparks across Singapore, a quick wash is always just around the corner.",
        icon: '📍',
        alt: 'Location pin icon'
    },
    { 
        title: "All-in-One System", 
        description: "Features include Water Jet, Foam, Vacuum, Blower, and Hand Washing options, providing a complete clean.",
        icon: '🧼',
        alt: 'Soap icon'
    },
];

export const howItWorksSteps = [
    { number: 1, title: "Locate & Park", description: "Find one of our 70+ Hygrow Vehicle Washing Systems at a multi-storey carpark." },
    { number: 2, title: "Select Service", description: "Use the user-friendly interface to select your desired functions: Foam, Vacuum, etc." },
    { number: 3, title: "Tap & Start", description: "Tap your payment card to start the machine. Our system allows you to pause and resume." },
    { number: 4, title: "Clean & Shine", description: "Enjoy a high-pressure, water-saving wash. Finish off with the vacuum and blower." }
];

export const productData = [
    {
        name: "Hygrow Helmet Cleaning System",
        image: "/helmet-cleaner.jpg",
        description: "Our state-of-the-art Helmet Cleaning Machine offers deep cleaning and sanitization, keeping your safety gear fresh and hygienic.",
        features: ["Deep UVC Sanitization", "Quick Dry Feature", "Removes Odors and Bacteria"]
    },
    {
        name: "Hygrow Car Mat Cleaner",
        image: "/car-mat-cleaner.jpg", 
        description: "Keep your vehicle interior spotless with our efficient Car Mat Cleaner. It quickly washes and dries all types of car mats.",
        features: ["Suitable for all Mat Types", "High-Pressure Washing", "Fast Spin-Dry Cycle"]
    }
];

export const popularDistricts = ['Ang Mo Kio', 'Jalan Besar / Bendemeer', 'Kallang Bahru', 'Woodlands', 'Jurong West', 'Tampines', 'Punggol', 'Yishun'];

// Global company information for easy updates
export const companyInfo = {
    name: "Hygrow Singapore Pte. Ltd.",
    email: "info@hygrow.com.sg",
    address: "7030 Ang Mo Kio Ave 5, Singapore",
    uen: "202238853N",
    whatsappNumber: "6591234567"
};