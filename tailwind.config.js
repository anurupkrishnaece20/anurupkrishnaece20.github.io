/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ink-blue': '#2C5282',
        'ink-brown': '#8B7558',
        'pencil-gray': '#4A5568',
      },
    },
  },
  plugins: [],
};
