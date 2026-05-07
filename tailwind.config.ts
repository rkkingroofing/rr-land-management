import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        white: '#FFFFFF',
        offwhite: '#F5F5F2',
        gray: {
          100: '#E8E8E5',
          300: '#B8B8B3',
          600: '#5A5A55',
          900: '#1A1A1A',
        },
        orange: {
          DEFAULT: '#FF6B1A',
          dark: '#E55A0E',
        },
        green: {
          DEFAULT: '#2D5016',
          dark: '#1F3A0E',
        },
      },
      fontFamily: {
        display: ['var(--font-anton)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.005em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.05' }],
      },
      letterSpacing: {
        widewide: '0.18em',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
