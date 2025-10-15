// src/data/appData.js

export const navigationLinks = [
    { name: 'Home', path: '#home' },
    // { name: 'Why Hygrow', path: '#features'},
    { name: 'How It Works', path: '#how-it-works'},
    { name: 'Benefits', path: '#helmet-benefits'},
    { name: 'Our Solution', path: '#featured-product'},
    // { name: 'Systems', path: '/systems' },
    // { name: 'Locations', path: '/locations' },
    // { name: 'About Us', 'path': '/about' },
    { name: 'Contact', path: '#contact' },
];

export const featuresData = [
    { 
        title: "Fragrance", 
        description: "Say goodbye to lingering odors and airborne contaminants. The Beaver Helmet Wash, designed with efficiency in mind, offers excellent value for its helmet cleaning machine price while actively sanitizes the air within the system, providing fresh, breathable helmets in every cycle.",
        icon: '👃🌬️✨',
        alt: 'Water droplet icon'
    },
    {
        title: "Comprehensive Sterilization",
        description: "Leave no germ untouched. The helmet spa’s dual-action heat drying and UV light eliminate moisture and hidden bacteria, preventing mold growth and ensuring total sanitation.",
        icon: '✨🛡️',
        alt: 'Sparkles icon'
    },
    { 
        title: "Cashless Convenience", 
        description: "Skip the lines and simplify billing. The Beaver Helmet Wash integrates helmet cleaning seamlessly with cashless payment systems for smooth and efficient operation.",
        icon: '💳📱💨',
        alt: 'Soap icon'
    },
    {
        title: "99.9% Bacterial Removal",
        description: "Our Helmet cleaner machine uses a powerful combination of ozone sterilization and UV light technology eliminates virtually all harmful bacteria, ensuring a safe and hygienic environment for your people.",
        icon: '🦠🧼✅',
        alt: 'Soap icon'
    },
    {
        title: "Safe Detergent",
        description: "Powerful cleaning doesn’t have to be harsh. Our motorcycle helmet cleaning machine uses a specially formulated detergent that tackles grime and sweat without compromising helmet integrity or user safety. Gentle on materials, tough on dirt.",
        icon: '🧼🍃👍',
        alt: 'Soap icon'
    },
    {
        title: "Efficient Drying",
        description: "Get your helmets back in action fast. Our cleaning machine with a rapid drying system minimizes downtime and keeps your crew working safely.",
        icon: '🌬️⏱️⚡',
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
        description: "Our state-of-the-art Helmet Cleaning Machine offers sanitization, keeping your safety gear fresh and hygienic.",
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
    name: "Hygrow Chennai",
    email: "hygienegrow@gmail.com",
    number: "+91 73975 19988",
    uen: "202238853N",
    whatsappNumber: "+917397519988"
};



export const helmetBenefits = {
    title: "Why Clean Your Helmet? Health Benefits You’ll Feel!",
    summary: "Disinfecting your helmet is vital for hygiene, especially in Chennai's humid climate. A clean interior protects your hair, skin, and overall comfort.",
    sections: [
        {
            icon: '💆‍♂️',
            title: 'For Hair & Scalp',
            points: [
                'Prevents Dandruff and Itchy Scalp: Regular use traps sweat and oil, encouraging fungus. Disinfected helmets prevent irritation.',
                'Reduces Hair Fall: Germs and sweat buildup can block hair follicles. A clean helmet reduces friction and stress on the scalp.',
            ]
                
        },
        {
            icon: '🌸',
            title: 'For Skin & Face',
            points: [
                'Minimizes Odor Transfer: Fresh helmets prevent sweat smell from lingering on your skin and face after rides.',
                'Prevents Fungal Infections: Lowers the risk of common skin infections and ringworm, especially crucial in humid climates.',
            ]
        },
        {
            icon: '💨',
            title: 'Overall Comfort',
            points: [
                'Boosts Breathing Comfort: Fresh helmets reduce musty air, making it easier to breathe during commutes.',
                'Improves Mental Freshness: Wearing a clean, good-smelling helmet creates a sense of well-being before and after every ride.',
                'Safer Shared Helmet Use: Reduces transmission of germs between users in rentals, delivery fleets, or among pillion riders.',
            ]
        }
    ]
};

// src/data/appData.js (Add this at the bottom)

export const faqData = [
    {
        question: "How does the helmet cleaning machine work?",
        answer: "Our machine uses a multi-stage process to ensure your helmet is thoroughly cleaned and sanitized. It combines ozone sterilization, UV light, a gentle, safe detergent, and heat drying. This powerful combination removes 99.9% of bacteria, leaving your helmet fresh and clean."
    },
    {
        question: "What types of helmets can I clean in the machine?",
        answer: "Our machine is designed to clean a wide variety of helmets. However, we always recommend checking your helmet manufacturer's specific cleaning instructions before using our service to ensure compatibility."
    },
    {
        question: "Is this cleaning process environmentally friendly?",
        answer: "Yes! We've designed our process to be as eco-friendly as possible. We use minimal chemicals, an energy-efficient low-temperature drying process, and reduce waste by eliminating the need for disposable wipes and sprays."
    },
    {
        question: "How much does a helmet cleaning cost?",
        answer: "A complete helmet wash and sanitization cycle costs 5 SGD."
    },
    {
        question: "How long does the cleaning process take?",
        answer: "You'll have a fresh, clean, and dry helmet ready to wear in just 8 minutes!"
    },
    {
        question: "Do you provide franchise opportunities?",
        answer: "No, we don’t provide franchise opportunities as of now. We will be planning for it in the future, and all updates will be shared on this website only."
    }
];
