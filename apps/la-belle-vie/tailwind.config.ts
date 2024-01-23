import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './metas.tsx'],
  theme: {
    extend: {
      colors: {
        main: '#f2787a',
        blue: '#1336b9',
        bluelight: '#15c'
      }
    }
  }
}

export default config
