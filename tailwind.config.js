// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert Sans', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],

      },
      animation: {
        marqueeLTR: 'marqueeLTR 40s linear infinite',
        float: 'float 2s ease-in-out infinite', // 👈 floating animation
      },
      keyframes: {
        marqueeLTR: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }, 
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
