//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: '#0A1628',
        royalBlue: '#2563EB',
        mint: '#10B981',
        mintDark: '#059669',
        cardBg: '#FFFFFF',
        textPrimary: '#FFFFFF',
        textSecondary: '#94A3B8',
        textDark: '#0F172A',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px rgba(10, 22, 40, 0.15)',
        'premium': '0 25px 50px -12px rgba(10, 22, 40, 0.25)',
        'premium-lg': '0 35px 60px -15px rgba(10, 22, 40, 0.35)',
        'glow-mint': '0 0 30px rgba(16, 185, 129, 0.4)',
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.4)',
      },
      borderRadius: {
        'card': '1.5rem',
        'card-lg': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
