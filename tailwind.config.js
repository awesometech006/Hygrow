// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HYGROW BRAND COLORS - Change these to update the entire site's palette
        'hygrow-blue': '#007bff',       // Primary Brand Blue
        'hygrow-dark': '#333333',       // Main Dark Text
        'hygrow-light-bg': '#f8f9fa',   // Light Section Background
        'hygrow-accent-green': '#28a745', // Eco/Success Icon Green
        'hygrow-accent-red': '#dc3545',   // Step Number/Alert Red
        'hygrow-footer': '#212529',     // Footer Background
      },
    },
  },
  plugins: [],
}