/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { brand: { DEFAULT: "#0F766E", light: "#14B8A6", dark: "#0B5E57" } }
  } },
  plugins: [],
}
