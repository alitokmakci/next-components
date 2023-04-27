/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './@ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#f97316',
        success: '#4ade80',
        error: '#ef4444',
        warning: '#ffba00',
        info: '#38bdf8',
        dark: '#020617',
        text: '#334155',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      }
    },
  },
  plugins: [],
}
