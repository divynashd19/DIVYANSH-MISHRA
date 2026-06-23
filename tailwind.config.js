/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#030712',      // Deepest black-grey
          card: '#0b0f19',    // Midnight blue card background
          border: '#1f2937',  // Soft grey-blue border
        },
        accent: {
          blue: '#3b82f6',    // Neon blue
          purple: '#8b5cf6',  // Neon violet
          pink: '#ec4899',    // Soft pink
        }
      },
      animation: {
        'glow': 'glow 8s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
