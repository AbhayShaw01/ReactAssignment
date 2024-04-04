/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#006bff",
        secondary:"#0a2540",
        backdrop:"#e7edf6",
        backdropSecond:"#092640",
        heading:"#194870",
        subHeading:"#4A5966",
        desc:"#476788"
      }
    },
    
  },
  plugins: [],
};
