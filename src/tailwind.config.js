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
          1: "#FFBB30",
          2: "#E5E5E5",
          3: "#fec024",
          4: "#6F727A",
          5: "#458BE0",
          6: "#8AADCD",
          7: "#DC2B2B",
          8: "#222222",
          9: "#FFCC46",
          10: '#FFAE09',
          11: '#F5F5F5'
        },
        icon: {
          1: "#3D5AB6",
          2: "#F3DFDF",
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
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
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
