/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      mono: ['Cutive Mono', 'monospace'],
    },
    colors: {
      'poppyred': '#d02200',
      'hoverred': '#DD150F',
      'haywhite': '#DDD8D1',
      'darkhay': '#A67F42',
      'skyblue': '#b9dbed',
    }
  },
};
export const plugins = [];
