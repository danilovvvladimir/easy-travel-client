/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'dark-primary': 'rgb(var(--color-dark-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        title: 'rgb(var(--color-title) / <alpha-value>)',
        description: 'rgb(var(--color-description) / <alpha-value>)',
        'description-title': 'rgb(var(--description-title) / <alpha-value>)',
        'description-light': 'rgb(var(--description-light) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)'
      }
    }
  },
  plugins: []
};
