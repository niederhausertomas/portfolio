/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '20ch' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        animation: {
          'marquee': 'marquee 30s linear infinite',
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
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