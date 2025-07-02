module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert Sans', 'sans-serif', 'jost'],
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'fade-slide': 'fadeSlide 1s ease-in-out',
        'marqueeRight': 'marqueeRight 40s linear infinite',
        'float-slow': 'float 1.2s ease-in-out infinite',
        'grow-line': 'grow-line 2s ease-in-out forwards',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'grow-line': {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],

};
