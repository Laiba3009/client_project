/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
          colors: {
            primary: '#6B21A8', // purple-800
            secondary: '#9333EA', // purple-600
          
      },
      
    },
  },
  plugins: [],
}
