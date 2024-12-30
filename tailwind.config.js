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
        sm: '640px', 
        md: '768px',  
        lg: '1024px', 
        xl: '1280px',
        '2xl': '1536px',
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
        'marquee': 'marquee 25s linear infinite',
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