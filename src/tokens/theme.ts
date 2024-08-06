import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    denim: [
      "#eef5fc",
      "#dbe6f2",
      "#b3cde7",
      "#88b1dd",
      "#659ad4",
      "#508bcf",
      "#4485ce",
      "#3672b7",
      "#2c65a4",
      "#1c5791"
    ],
    green: [
      "#e5ffe9",
      "#ceffd6",
      "#9cffad",
      "#66ff80",
      "#3cff5b",
      "#24ff43",
      "#14ff36",
      "#00e328",
      "#00c91f",
      "#00ae11"
    ],
    magenta: [
      "#ffe7f2",
      "#ffcedf",
      "#ff9bbd",
      "#ff6398",
      "#ff3679",
      "#ff1865",
      "#ff015b",
      "#e5004b",
      "#cc0042",
      "#b40038"
    ],
    orange: [
      "#fff4e0",
      "#ffe6cb",
      "#ffcd99",
      "#ffb263",
      "#ff9a36",
      "#ff8b18",
      "#ff8405",
      "#e47000",
      "#cb6400",
      "#b15400"
    ],
    plum: [
      "#ffedff",
      "#f7d8f8",
      "#eaafec",
      "#dd83e1",
      "#d25ed6",
      "#cc46d1",
      "#ca3acf",
      "#b32cb7",
      "#a024a4",
      "#8c1990"
    ],
    red: [
      "#ffe8f2",
      "#ffcfde",
      "#ff9cbb",
      "#fd6695",
      "#fc3a75",
      "#fc2061",
      "#fd1056",
      "#e20147",
      "#cb003e",
      "#b20034"
    ],
    skyBlue: [
      "#ddffff",
      "#c8f8ff",
      "#97efff",
      "#60e5ff",
      "#36ddff",
      "#18d8ff",
      "#00d6ff",
      "#00bee5",
      "#00a9cd",
      "#0092b4"
    ],
    yellow: [
      "#fffbe0",
      "#fff7ca",
      "#ffed99",
      "#ffe462",
      "#ffdb36",
      "#ffd618",
      "#ffd301",
      "#e3bb00",
      "#c9a600",
      "#ae8f00"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Poppins', sans-serif"
  },
  primaryColor: "denim",
  components: {
    Tooltip: {
      defaultProps: {
        multiline: true,
        maw: 220
      }
    }
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
