/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        96: "24rem",
        128: "32rem",
        160: "40rem",
      },
      height: {
        96: "24rem",
        128: "32rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
};
