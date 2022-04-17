import { createStitches } from "@stitches/react";

const gradients = {
  ice: "linear-gradient(180deg, #298BFF 0%, #4B00EC 99%)",
  fire: "linear-gradient(140deg, #F04B48 24.04%, #FF6711 75%)",
  rainbow:
    "linear-gradient(90deg, #40FF86 0.01%, #1CA0FF 69.18%, #FF8E8E 100.07%)",
};

const gray = {
  gray50: "#f8faf9",
  gray100: "#ecf1f5",
  gray200: "#d4dfea",
  gray300: "#a9bece",
  gray400: "#7796ab",
  gray500: "#5b7488",
  gray600: "#48596a",
  gray700: "#384250",
  gray750: "#29313e",
  gray800: "#0e1622", // main gray for background
  gray850: "#0e131e",
  gray900: "#0A0F17",
};

const emerald = {
  emerald50: "#ecf4f3",
  emerald100: "#c8f0f0",
  emerald200: "#8ce8dd",
  emerald300: "#52cfb7",
  emerald400: "#40ff86",
  emerald500: "#03da7f",
  emerald600: "#12854b",
  emerald700: "#12673c",
  emerald800: "#0e472f",
  emerald900: "#0a2c25",
};

const yellow = {
  yellow50: "#faf9f0",
  yellow100: "#f7efa0",
  yellow200: "#ebd834",
  yellow300: "#d3bf34",
  yellow400: "#a59719",
  yellow500: "#817a0b",
  yellow600: "#676207",
  yellow700: "#504a07",
  yellow800: "#373307",
  yellow900: "#261f06",
};

const blue = {
  blue50: "#f4f8fa",
  blue100: "#dbf0fb",
  blue200: "#b3dff7",
  blue300: "#81c0ea",
  blue400: "#1ca0ff",
  blue500: "#3b79c9",
  blue600: "#325eb4",
  blue700: "#294791",
  blue800: "#1d3068",
  blue900: "#111d43",
};

const cocoa = {
  cocoa50: "#fcfbf7",
  cocoa100: "#faf0d4",
  cocoa200: "#f5d7a9",
  cocoa300: "#e6af75",
  cocoa400: "#ff6711",
  cocoa500: "#c25f2a",
  cocoa600: "#a5451b",
  cocoa700: "#7f3417",
  cocoa800: "#582411",
  cocoa900: "#38160b",
};

const coral = {
  coral50: "#fdfcfa",
  coral100: "#fbf0eb",
  coral200: "#f8ced7",
  coral300: "#efa1b1",
  coral400: "#ed7087",
  coral500: "#f04b48",
  coral600: "#cb3347",
  coral700: "#a42634",
  coral800: "#781b22",
  coral900: "#4a1113",
};

export const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#F7FBFC",
  ...gray,
  ...emerald,
  ...yellow,
  ...blue,
  ...cocoa,
  ...coral,
  ...gradients,
};

const space = {
  xs: ".6rem",
  sm: "1rem",
  md: "1.4rem",
  lg: "2.4rem",
  xl: "4rem",
};

// Padding values
export const p = {
  none: { padding: 0 },
  xs: { padding: "$xs" },
  sm: { padding: "$sm" },
  md: { padding: "$md" },
  lg: { padding: "$lg" },
  xl: { padding: "$xl" },
  "x-xs": { padding: "0 $xs" },
  "y-xs": { padding: "$xs 0" },
  "l-xs": { padding: "0 0 0 $xs" },
  "r-xs": { padding: "0 $xs 0 0" },
  "t-xs": { padding: "$xs 0 0 0" },
  "b-xs": { padding: "0 0 $xs 0" },
  "x-sm": { padding: "0 $sm" },
  "y-sm": { padding: "$sm 0" },
  "l-sm": { padding: "0 0 0 $sm" },
  "r-sm": { padding: "0 $sm 0 0" },
  "t-sm": { padding: "$sm 0 0 0" },
  "b-sm": { padding: "0 0 $sm 0" },
  "x-md": { padding: "0 $md" },
  "y-md": { padding: "$md 0" },
  "l-md": { padding: "0 0 0 $md" },
  "r-md": { padding: "0 $md 0 0" },
  "t-md": { padding: "$md 0 0 0" },
  "b-md": { padding: "0 0 $md 0" },
  "x-lg": { padding: "0 $lg" },
  "y-lg": { padding: "$lg 0" },
  "l-lg": { padding: "0 0 0 $lg" },
  "r-lg": { padding: "0 $lg 0 0" },
  "t-lg": { padding: "$lg 0 0 0" },
  "b-lg": { padding: "0 0 $lg 0" },
  "x-xl": { padding: "0 $xl" },
  "y-xl": { padding: "$xl 0" },
  "l-xl": { padding: "0 0 0 $xl" },
  "r-xl": { padding: "0 $xl 0 0" },
  "t-xl": { padding: "$xl 0 0 0" },
  "b-xl": { padding: "0 0 $xl 0" },
};

// Margin values
export const m = {
  none: { margin: 0 },
  xs: { margin: "$xs" },
  sm: { margin: "$sm" },
  md: { margin: "$md" },
  lg: { margin: "$lg" },
  xl: { margin: "$xl" },
  "x-xs": { margin: "0 $xs" },
  "y-xs": { margin: "$xs 0" },
  "l-xs": { margin: "0 0 0 $xs" },
  "r-xs": { margin: "0 $xs 0 0" },
  "t-xs": { margin: "$xs 0 0 0" },
  "b-xs": { margin: "0 0 $xs 0" },
  "x-sm": { margin: "0 $sm" },
  "y-sm": { margin: "$sm 0" },
  "l-sm": { margin: "0 0 0 $sm" },
  "r-sm": { margin: "0 $sm 0 0" },
  "t-sm": { margin: "$sm 0 0 0" },
  "b-sm": { margin: "0 0 $sm 0" },
  "x-md": { margin: "0 $md" },
  "y-md": { margin: "$md 0" },
  "l-md": { margin: "0 0 0 $md" },
  "r-md": { margin: "0 $md 0 0" },
  "t-md": { margin: "$md 0 0 0" },
  "b-md": { margin: "0 0 $md 0" },
  "x-lg": { margin: "0 $lg" },
  "y-lg": { margin: "$lg 0" },
  "l-lg": { margin: "0 0 0 $lg" },
  "r-lg": { margin: "0 $lg 0 0" },
  "t-lg": { margin: "$lg 0 0 0" },
  "b-lg": { margin: "0 0 $lg 0" },
  "x-xl": { margin: "0 $xl" },
  "y-xl": { margin: "$xl 0" },
  "l-xl": { margin: "0 0 0 $xl" },
  "r-xl": { margin: "0 0 $xl 0" },
  "t-xl": { margin: "$xl 0 0 0" },
  "b-xl": { margin: "0 0 $xl 0" },
};

export const { styled, css, getCssText, keyframes, createTheme } =
  createStitches({
    utils: {
      backdropFilter: (value) => {
        return {
          [`@-moz-document url-prefix()`]: {
            ".light-theme &": {
              backgroundColor: "$white !important",
            },
            backgroundColor: "$gray800 !important",
          },
          backdropFilter: value,
          WebkitBackdropFilter: value,
        };
      },
      st: (value) => ({
        "& > *": {
          marginTop: value,
        },
      }),
      sb: (value) => ({
        "& > *": {
          marginBottom: value,
        },
      }),
      sl: (value) => ({
        "& > *": {
          marginLeft: value,
        },
      }),
      sr: (value) => ({
        "& > *": {
          marginRight: value,
        },
      }),
      sx: (value) => ({
        "& > *": {
          margin: `0 ${value}`,
        },
      }),
      sy: (value) => ({
        "& > *": {
          margin: `${value} 0`,
        },
      }),
      s: (value) => ({
        "& > *": {
          margin: value,
        },
      }),
    },
    media: {
      light: "(prefers-color-scheme: light)",
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
      "2xl": "(min-width: 1536px)",
    },
    theme: {
      colors,
      space,
      fontSizes: {
        xs: "0.75rem",
        sm: "0.85rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      fonts: {
        main: "'Montserrat', sans-serif",
      },
      fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeights: {
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "1.75rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "1",
        "7xl": "1",
        "8xl": "1",
        "9xl": "1",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      sizes: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
      },
      borderWidths: {},
      borderStyles: {},
      radii: {
        xs: ".25rem",
        sm: ".6rem",
        md: "1rem",
        full: "99999px",
      },
      shadows: {
        ring: "rgb(255, 255, 255) 0px 0px 0px 0px, $colors$emerald400  0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        glow: "0px 0px 8px 0px rgba(103, 116, 136, 0.12)",
        subtle: "0px 6px 8px 0px rgb(10 15 24 / 64%)",
        sunk: "inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 8px rgba(103, 116, 136, 0.12)",
        risen:
          "12px 12px 20px rgba(0, 0, 0, 0.4), -8px -8px 10px rgba(103, 116, 136, 0.12)",
        "sunk-sm":
          "inset 2px 2px 2px rgba(0, 0, 0, 0.25), inset -1px -1px 4px rgba(103, 116, 136, 0.12)",
        "risen-sm":
          "4px 4px 5px rgba(0, 0, 0, 0.4), -2px -2px 2.5px rgba(103, 116, 136, 0.12)",
      },
      zIndices: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
      },
      transitions: {},
    },
  });

export const lightTheme = createTheme("light-theme", {
  shadows: {
    ring: "rgb(255, 255, 255) 0px 0px 0px 0px, $colors$emerald500  0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    subtle: "0px 6px 8px 0px rgba(0, 0, 0, 0.2)",
    sunk: "inset 4px 4px 8px rgba(171, 171, 171, 0.2), inset -4px -4px 8px #FFFFFF",
    "sunk-sm":
      "inset 2px 2px 2px rgba(171, 171, 171, 0.2), inset -4px -4px 8px #FFFFFF",
    "risen-sm":
      "4px 4px 5px rgba(171, 171, 171, 0.2), -2px -2px 2.5px rgba(255, 255, 255, 0.7)",
    risen:
      "10px 10px 17px rgba(171, 171, 171, 0.2), -10px -10px 12px rgba(255, 255, 255, 0.7)",
  },
});
