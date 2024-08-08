/** @type {import('next').NextConfig} */
const colors = require('tailwindcss/colors');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: colors.purple,
        secondary: colors.pink,
        ...colors,
      },
    },
  },
  plugins: [],
};

module.exports = nextConfig;
