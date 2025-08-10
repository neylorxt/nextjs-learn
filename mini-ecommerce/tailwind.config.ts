import type { Config } from 'tailwindcss'
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': '22.5rem',
        '120': '30rem',
      },
      maxWidth: {
        '300': '75rem',
      },
      colors: {
        brand: {
          300: '#93c5fd',
          600: '#2563eb',
        }
      }
    }
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
} as const

export default config
