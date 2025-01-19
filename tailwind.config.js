

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll': {
          from: { transform: 'translateX(0.75rem)' },
          to : { transform : 'translateX(-100%)' },
          
        },
        'scrollMd': {
          from: { transform: 'translateX(0.75rem)' },
          to : { transform : 'translateX(-105%)' },
          
        },
        'scrollLg': {
          from: { transform: 'translateX(0.75rem)' },
          to : { transform : 'translateX(-110%)' },
          
        },
        
        
        
      },
      animation: {
        'scroll': 'scroll 5s linear infinite',
        'scrollMd': 'scrollMd 5s linear infinite',
        'scrollLg': 'scrollLg 5s linear infinite',
      },
    },
  },
  plugins: [],
}

