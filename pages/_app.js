import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import "../styles/globals.css"

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

function EdgarWeb({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default EdgarWeb;
