/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',  // Pantallas pequeñas
        md: '768px',  // Pantallas medianas
        lg: '1024px', // Pantallas grandes
        xl: '1280px', // Pantallas extra grandes
        '2xl': '1536px', // Pantallas extra extra grandes
      },
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '20ch' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
    },
    screens: {
      
      
    }
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.swiper-button-next, .swiper-button-prev': {
          color: '#ffffff',
        },
      })
    },
  ],
}