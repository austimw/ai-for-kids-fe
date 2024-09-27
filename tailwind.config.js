/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'summary-notes': ['"Summary Notes"', 'sans-serif'],
      },
      backgroundImage: {
        'gif-background': "url('/src/assets/video/spinner.gif')", // Replace with your GIF path
      },
      keyframes: {
        'bounce-scale': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'bounce-scale': 'bounce-scale 1s ease',
      },
    },
    plugins: [],
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none' /* Chrome, Safari, Opera */,
        },
      });
    },
  ],
};
