import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#080810',
        surface: '#0f0f1a',
        border: 'rgba(255,255,255,0.08)',
        content: '#f4f4f8',
        muted: '#6b7280',
        primary: '#7c3aed',
        'primary-light': '#a78bfa',
        cyan: '#06b6d4',
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,10vw,8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.25rem,5vw,4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
} satisfies Config
