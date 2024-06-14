/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(8deg)' },
          '50%': { transform: 'rotate(-8deg)' },
        }
      },
       animation: {
        shake: 'wiggle 0.5s ease-in-out infinite',
      }
     },
    },
  plugins: [],
}