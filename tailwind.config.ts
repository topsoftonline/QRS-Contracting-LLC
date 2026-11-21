import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2A45',
          dark: '#071C2F',
          light: '#143A5C',
          muted: '#1E4A6E',
        },
        gold: {
          DEFAULT: '#E2B13C',
          dark: '#C99A2A',
          light: '#F0C75A',
        },
        sand: '#F5F7FA',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(11, 42, 69, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
