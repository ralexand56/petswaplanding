import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5fbf7',
        brand: '#0b6a53',
        brandDark: '#084f3f',
        accent: '#ffe38a',
        ink: '#0e1b16',
        muted: '#5a6b63',
        card: '#ffffff',
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,.06)',
      },
      borderRadius: {
        xl: '14px',
        lg: '12px',
        md: '10px',
      },
      maxWidth: {
        site: '1080px',
      },
    },
  },
  plugins: [],
}
export default config