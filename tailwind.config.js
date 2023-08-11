/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html', 
    'css/*.css',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
      },
    },
  },
  plugins: [],
};
