import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        body: ["Switzer Variable", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#000000",
          white: "#ffffff",
          teal: "#33B899",
          "teal-light": "#A1E6DA",
          navy: "#14334C",
          "deep-navy": "#121047",
          forest: "#426A5A",
          orange: "#FF4B00",
          "orange-light": "#FFD099",
          green: "#B6E6A1",
          "green-light": "#EDFFB8",
          accent: "#af2901",
        },
        ui: {
          bg: "#F1F1F1",
          separator: "#D2D2D2",
          grey: "#999999",
          "grey-light": "#D7D7D7",
          "grey-dark": "#535353",
          "grey-tag": "#ECECEC",
        },
        surface: {
          cream: "#F9F6EF",
          "green-light": "#F2F9EC",
          "teal-light": "#E7F2F2",
          sage: "#E1EDDA",
          "blue-light": "#E7EFF3",
          lavender: "#EFEFF9",
        },
      },
      fontSize: {
        "display-1": ["160px", { lineHeight: "0.81", letterSpacing: "-0.03em" }],
        "display-2": ["72px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-3": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-4": ["24px", { lineHeight: "1.17", letterSpacing: "-0.02em" }],
        "body-lg": ["18px", { lineHeight: "1.2", letterSpacing: "-0.2px" }],
        "body-sm": ["14px", { lineHeight: "1.2" }],
      },
      borderRadius: {
        brand: "12px",
      },
      spacing: {
        header: "50px",
      },
    },
  },
};

export default config;
