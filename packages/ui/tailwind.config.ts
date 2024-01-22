import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  prefix: 'ui-',
  theme: {
    extend: {
      colors: {
        blue: '#1336b9',
        bluelight: '#15c'
      }
    }
  },
  corePlugins: {
    preflight: false
  }
}

export default config
