/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        dark: '0 1px 3px rgba(255, 255, 255, 0.1)'
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          60: '#DDDDDD',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          10: '#1565c0',
          20: '#9c27b0',
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        black: {
          10: '#0A0A0A',
          20: '#333333',
        }
      },
      backgroundImage: {
        // 'pattern-2': "url('/pattern-bg.png')", // this is for example if needed
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};