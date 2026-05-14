import { createTheme } from "@mui/material/styles";

const theme = new createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#10b981",
    },
    secondary: {
      main: "#34d399",
    },
    background: {
      default: "#07110f",
      paper: "#0f1e1a",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;
