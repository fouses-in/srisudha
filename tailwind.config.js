/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    filter: true,
  },
  theme: {
    backgroundImage: {
      sliderbg: "url('/home/sliderbg.jpeg')",
    },

    extend: {
      colors: {
        primary: "#F84D1B", //blueColor
        secondary: "#023047", //blueColor
        secondary: "#1b4962",
        secondaryText: "#4F4F4F",
        completedColor: "#EA4D88",
        cancelledColor: "#6573FB",
        pendingColor: "rgba(255, 206, 86, 0.6)",
        filterColor: "#E5E7EB",
        tertiary: "#014262",
        border: "#014262",
        primaryText: "#1D1B4C",
        blackText: "#010101", //blackText,
        background: "#E6E6E6",
        authBackground: "#F1f2f9",
        shade: "#F5F5F5",
        button: "#1D4ED8",

        opaque: "#ACB1B6",
        filledColor: "",
        unfilledColor: "#A6ACB8",
      },
      backgroundPosition: {
        "top-center": "top center",
        "bottom-center": "bottom center",
        "top-center": "top center",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        subheading: "2.5rem",
        mobileSubHeading: "1.6rem",
        mobileHeading: "2.5rem",
        heading: "4.5rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      maxWidth: {
        monitor: "1200px",
        messageCard: "360px",
        72: "17rem",
        1200: "1200px",
      },
      minWidth: {
        36: "9rem",
        20: "5rem",
        48: "12rem",
        38: "9.5rem",
        40: "10rem",
      },
      padding: {
        18: "4.5rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        "1px": "1px",
        "2px": "2px",
        0.5: "2px",
        "0.5px": "0.5px",
      },
      lineHeight: {
        heading: "5rem",
        mobileHeading: "3rem",
      },
      height: {
        height: "calc(100vh - 80px)",
        consult: "27rem",
        mobileConsult: "24rem",
        about: "2000px",
        160: "40rem",
      },
      width: {
        about: "2000px",
        108: "432px",
        124: "496px",
        "500px": "500px",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Bitter: ["Bitter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
