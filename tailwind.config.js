/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        snowBlack: '#171717',
        snowDark: '#252525',
        snowAccent: '#1140c9',
        snowAccentHover: '#0d319a',
        snowBg: '#f6f6f6',
        snowWhite: '#ffffff',
        snowMuted: '#818a91',
        snowBorder: '#e8e8e8',
      },
      spacing: {
        'gap-1': '15px',
        'gap-2': '30px',
        'gap-3': '45px',
        'gap-4': '60px',
        'gap-5': '90px',
        'gap-6': '120px',
      },
      maxWidth: {
        'nk-container': '1140px',
      },
    },
  },
  plugins: [],
};
