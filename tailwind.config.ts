import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif']
      },
      colors: {
        background: 'hsl(0, 0%, 95%)',
        foreground: 'hsl(0, 0%, 31%)',
        primary: {
          DEFAULT: 'hsl(33, 100%, 50%)',
          light: 'hsl(0, 0%, 95%)'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
