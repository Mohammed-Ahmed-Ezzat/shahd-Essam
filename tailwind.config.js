/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          950: '#041628',
          900: '#082F49',
          800: '#075985',
          700: '#0369A1',
          600: '#0284C7',
          500: '#0EA5E9',
          400: '#38BDF8',
          300: '#7DD3FC',
          200: '#BAE6FD',
          100: '#E0F2FE',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        alexandria: ['Alexandria', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(56, 189, 248, 0.35)',
        'glow-lg': '0 0 40px rgba(56, 189, 248, 0.45)',
        'glow-pink': '0 0 30px rgba(244, 63, 94, 0.35)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.35)',
      },
    },
  },
  plugins: [],
};
