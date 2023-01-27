/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#FBD062',
      'secondary': '#111430',
      'tertiary': '#7AB259',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}