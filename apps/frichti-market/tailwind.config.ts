import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#faf190',
        blue: '#1336b9',
        bluelight: '#15c'
      }
    }
  }
}

export default config