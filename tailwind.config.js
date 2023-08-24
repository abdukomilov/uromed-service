/** @type {import('tailwindcss').Config} */
tailwind.config = {
  theme: {
    container: {
      padding: {
        DEFAULT: '10px',
        sm:'2rem'
      },
    },
    extend: {
      screens: {
        'xs':'475px',
        // => @media (min-width: 450px) { ... }
      },
      
    }
  }
}
