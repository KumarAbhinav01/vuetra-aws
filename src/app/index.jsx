import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { CssBaseline } from "@mui/material";
import theme from "../theme";
import Router from "./AppRoutes";

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />

      <Router />
    </ThemeProvider>
  );
};

export default App;
