/** @type {import('tailwindcss').Config} */

/** */
const moduleColors = {
  primary: "#037C66",
  "primary-content": "#FDFDFD",
  secondary: "#E0649E",
  "secondary-content": "#FDFDFD",
  accent: "#E09F6D",
  "accent-content": "#FDFDFD",
  info: "#99D2E6",
  "info-content": "#002B3D",
  warning: "#FBBD23",
  "warning-content": "#382800",
  success: "#78E8B4",
  "success-content": "#003320",
  error: "#F87272",
  "error-content": "#470000",
};
/** */
const darkBaseColors = {
  "modal-backdrop": "rgba(0, 0, 0, 0.6)",
  "base-100": "#131415",
  "base-200": "#191A1C",
  "base-300": "#222326",
  neutral: "#131415",
  "neutral-focus": "#131415",
};
/** */
const lightBaseColors = {
  "modal-backdrop": "rgba(0, 0, 0, 0.6)",
  "base-100": "#FDFDFD",
  "base-200": "#191A1C",
  "base-300": "#222326",
  neutral: "#FDFDFD",
};

/** */
const commonVariables = {
  "--btn-text-case": "normalcase",
  "--rounded-btn": "0.25rem",
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...moduleColors,
          ...lightBaseColors,
          ...commonVariables,
        },
        dark: {
          ...moduleColors,
          ...darkBaseColors,
          ...commonVariables,
        },
      },
    ],
    darkTheme: true,
  },
};
