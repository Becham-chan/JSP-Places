/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b0b0d',
          900: '#0e0e11',
          800: '#16161b',
          700: '#1f1f26',
        },
        blood: '#7a1f2b',
        bruise: '#5b2a86',
        bone: '#e8e3dd',
        fog: '#8b8b93',
      },
      fontFamily: {
        display: ['"Noto Serif JP"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Noto Sans Thai"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(232,227,221,0.06), 0 12px 32px -12px rgba(0,0,0,0.8)',
        'card-hover':
          '0 0 0 1px rgba(122,31,43,0.45), 0 16px 40px -12px rgba(122,31,43,0.25), 0 12px 32px -12px rgba(0,0,0,0.9)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '8%': { opacity: '0.72' },
          '10%': { opacity: '1' },
          '32%': { opacity: '0.85' },
          '34%': { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
