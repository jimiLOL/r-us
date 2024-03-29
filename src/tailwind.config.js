module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./src/**/*.vue",
    "./**/**/*.vue",
    // "./resources/**/*.php",
    // "./resources/**/*.html",
    // "./resources/**/*.js",
    // "./resources/**/*.vue",
  ],
  purge: {
    content: [
      "./**/*.html",
      "./**/*.js",
      "./**/*.vue",
      "./**/**/*.vue",
      // "./resources/**/*.js",
      // "./resources/**/*.vue",
    ],
    options: {
      // Whitelisting some classes to avoid purge
      safelist: [/^bg-/, /^text-/, /^border-/],
      blocklist: ['child-flex']
    }
  },
  darkMode: "class",
  // prefix: 'tw-',
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: "#222222",
    }),
    extend: {
      colors: {
        theme: {
          1: "#A8CFFF",
          2: "#E5E5E5",
          3: "#fec024",
          4: "#6F727A",
          5: "#458BE0",
          6: "#8AADCD",
          7: "#DC2B2B",
          8: "#FCFCFC",
          9: "#FFCC46",
          10: '#FDB04B',
          11: '#F5F5F5',
          12: '#0058C3',
          13: '#577E6B',
          14: '#B3B6BD',
          15: '#ffffff',
          16: '#F7F7F7',
          17: '#79A7F3'
        },
        social: {
          wp: "#48C95F",
          wp_contrast: '#76E489',
          tg: "#27A6E5",
          tg_contrast: '#5BC1F2',
          3: "#E1F4EA"
        },
        dark: {
          1: "#293145",
          2: "#232a3b",
          3: "#313a55",
          4: "#1e2533",
          5: "#3f4865",
          6: "#2b3348",
          7: "#181f29",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
          901: "#7fff00"
        },
        bt: {
          1: '#A8CFFF',
          2: '#497FE7',
          3: '#FFEB80',
          4: '#FFC223',
          wh_1: '#74FF8D',
          wh_2: '#31C74C',
          tg_1: '#62CBFF',
          tg_2: '#278AE5',
          call_1: '#FFCC46',
          call_2: '#FFB500',
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif',],
      },
    }
  },
  screens: {
    smm: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1600px",
  },
  viewer: false,
  variants: {
    extend: {
      zIndex: ["responsive", "hover"],
      position: ["responsive", "hover"],
      padding: ["responsive", "last"],
      margin: ["responsive", "last"],
      borderWidth: ["responsive", "last"],
      backgroundColor: ["last", "first", "odd", "responsive", "hover", "dark"],
      borderColor: ["last", "first", "odd", "responsive", "hover", "dark"],
      textColor: ["last", "first", "odd", "responsive", "hover", "dark"],
    },
  },
  important: true
};
