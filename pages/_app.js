import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import '../styles/globals.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Condensed', 
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    },
    h2: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    },
    h3: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    },
    h4: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    },
    h5: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    },
    h6: {
      fontFamily: [
        'Heebo', 
        'sans-serif'
      ].join(','),
    }
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
      <Head>
        <title>Edgar Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Welcome to Edgar Web just my personal idea storage." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edgar Web" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:description" content="Welcome to Edgar Web just my personal idea storage." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Edgar Web" />
        <meta property="twitter:image" content="/Logo.png" />
        <meta property="twitter:description" content="Welcome to Edgar Web just my personal idea storage." />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default EdgarWeb;
