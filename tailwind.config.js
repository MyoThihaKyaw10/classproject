/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {

      fontFamily: {
          logoFont: "var(--logoFont)",
          headingFont: "var(--headingFont)",
          textFont: "var(--textFont)",
        },

        colors: {
          black: "var(--black)",
          white: "var(--white)",
          orange: "var(--orange)",
          gray: "var(--gray)",
          blue: "var(--blue)",
          red: "var(--red)",
          deepBlue: "var(--deep-blue)",
          lightGray: "var(--lightGray)",
          questBack: "var(--quest-back)",
          lightBlue: "var(--light-blue)"
        },

        spacing: {
          0.125: "0.125rem",
          2.7: "0.6rem",
        }
    },
  },
  plugins: [],
}

