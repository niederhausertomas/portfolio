/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        /* Misma pila que en localhost para que Netlify se vea igual */
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#1a1a1a',
          hover: '#333',
          muted: '#666',
        },
        surface: {
          input: '#f5f5f5',
          card: '#fff',
        },
      },
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
          'to': { width: '24ch' },
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
        'marquee-slow': 'marquee 35s linear infinite',
      },
    },
    screens: {
      
      
    }
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.swiper-button-next, .swiper-button-prev': {
          color: '#1a1a1a',
        },
      })
    },
  ],
}