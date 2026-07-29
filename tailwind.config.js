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
        espresso: {
          900: '#1b1412',
          800: '#231b18',
          700: '#2c221e',
          600: '#3d322c',
          100: '#faf7f2',
        },
        gold: {
          500: '#c59b27',
          600: '#a87814',
          400: '#d4af37',
          100: '#faf0d7',
        },
        snowBlack: '#231b18',
        snowDark: '#3d322c',
        snowAccent: '#c59b27',
        snowAccentHover: '#a87814',
        snowBg: '#faf7f2',
        snowWhite: '#ffffff',
        snowMuted: '#8c7d75',
        snowBorder: '#e8dfd8',
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
