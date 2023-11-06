/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Cutive Mono', 'monospace'],
      },
      colors: {
        'poppyred': '#d02200',
        'hoverred': '#DD150F',
        'haywhite': '#eee2d2',
        'darkhay': '#A67F42',
        'skyblue': '#b9dbed',
      }
    },
  },
  plugins: [],
}
