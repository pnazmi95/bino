/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      fontFamily: {
         display: ["Estedad", "sans-serif"],
         fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            'regular': 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
         }
      },
      colors: {
         light: {
            primary: "#AA0095",
            typeface_b: "#000000",
            typeface_w: "#FFFFFF",
            error: "#FF0000",
            success: "#00B051",
            hover: "#bf3faf",
         },
      },
      extend: {},
   },
   plugins: [
      // require('tailwind-scrollbar'),
      require('tailwind-scrollbar-hide')
   ],
}
