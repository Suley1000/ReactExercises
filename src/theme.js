import { createTheme } from "@mui/material/styles";
export default createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(255, 236, 153, 1)",
      main: "rgb(11, 114, 133)",
      dark: "rgba(240, 140, 0, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(208, 191, 255, 1)",
      main: "rgba(132, 94, 247, 1)",
      dark: "rgba(103, 65, 217, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 201, 201, 1)",
      main: "rgba(255, 107, 107, 1)",
      dark: "rgba(224, 49, 49, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
