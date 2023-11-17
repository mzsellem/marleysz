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
      'poppyred': '#e74606',
      'hoverred': '#DD150F',
      // 'brightred': '#d52005',
      'brightred': '#f62809',
      'haywhite': '#DDD8D1',
      'darkhay': '#A67F42',
      'skyblue': '#b9dbed',
      'other': '#d5d4c2',
      'grass': '#58672b',
      'grey': '#e5e7eb',
    }
  },
};
export const plugins = [];
