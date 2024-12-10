/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-purple': {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        'slide-left': 'slideLeft 15s linear infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.purple.600'),
              '&:hover': {
                color: theme('colors.purple.700'),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.purple.400'),
              '&:hover': {
                color: theme('colors.purple.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};