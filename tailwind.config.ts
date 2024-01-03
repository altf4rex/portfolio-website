import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#080909",
        white: "#EBEBEB",
        primary: "#B2B2B1",
        secondary: "#4D4D4C",
      }
    },
  },
  plugins: [],
}
export default config
