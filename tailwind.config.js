/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7f7',
          100: '#e7efef',
          200: '#c3d7d7',
          300: '#9fbfbf',
          400: '#578f8f',
          500: '#0f5f5f',
          600: '#0e5656',
          700: '#0b4747',
          800: '#093838',
          900: '#072e2e',
        },
        sage: {
          50: '#f7f7f5',
          100: '#ebeae6',
          200: '#ceccbf',
          300: '#b1ad99',
          400: '#76704d',
          500: '#3b3300',
          600: '#352e00',
          700: '#2c2600',
          800: '#231f00',
          900: '#1c1900',
        },
        light: {
          100: '#FFFFFF',
          200: '#FAF7F2',
          300: '#F4F1EA',
          400: '#E5E1D8',
        },
        cream: '#FAF7F2',
        sand: '#E5E1D8',
        stone: '#2C2521',
        coffee: '#4A3F35'
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        serif: ['Cormorant Garamond', 'serif']
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'prose-wide': '75ch',
      },
      letterSpacing: {
        'widest': '.25em'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} 