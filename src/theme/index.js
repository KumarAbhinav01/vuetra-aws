import { createTheme } from "@mui/material/styles";

import themeTypography from "./typography";
import componentStyleOverrides from "./compStyleOverride";

const getColor = (mode, darkColor, lightColor) => {
  return mode === "dark" ? darkColor : lightColor;
};

export const theme = (mode) => {
  const color = {
    primary: getColor(mode, "#FFFFFF", "#2E3E61"),
    secondary: "#8A96A6",
    tertiary: getColor(mode, "#FFFFFF", "#0E1011"),
    blue: "#8DADFF",
    blue1: "#8CADFF",
    red: "#F55F82",
    green: "#07B869",
    darkgreen: "#102E23",
    yellow: "#F5CF11",
    orange: "#E69122",
    purple: "#7E83FF",
    darkblue: "#2196f3",
    bgblue: getColor(mode, "#121929", "#EDF3FF"),
    inputborder: getColor(mode, "transparent", "#e4e4e4"),
    border2: "#ced4da",
    border: getColor(mode, "#2E3E612B", "#EEEEEE"),
    border3: getColor(mode, "#647DB52B", "#EDEFF2"),
    paper: getColor(mode, "#0E1011", "#F7F9FA"),
    bg: getColor(mode, "#000000", "#FFFFFF"),
    bg2: getColor(mode, "#131517", "#FFFFFFBF"),
    bg3: getColor(mode, "#0E1011", "#F7F9FA"),
    bg4: getColor(mode, "#161A1C", "#F7F9FA"),
    buttonbg: getColor(mode, "#8DADFF", "#2E3E61"),
    button: getColor(mode, "#2E3E61", "#FFFFFF"),
    lightText: "#2E3E61",
    darkText: "#FFFFFF",
  };
  const themeOption = {
    mode: mode,
    colors: color,
    paper: color.bg3,
    divider: color.border,
    success: color.green,
  };

  const themeOptions = {
    palette: {
      mode: themeOption.mode,
      color: themeOption.colors,
      success: {
        main: themeOption.colors.green,
      },
      primary: {
        main: themeOption.colors.blue,
      },
    },

    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);
  return themes;
};

export default theme;
