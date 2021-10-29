import * as React from "react"
import Head from "next/head"
import { Box, Container, Typography } from "@mui/material"
import Header from "../page_sections/Header"
import Footer from "../page_sections/Footer"

function About() {
  return (
    <Box>
      <Head>
        <title>Edgar Web | Just a little bit about me</title>
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
        <meta name="description" content="Just a little bit about me." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edgar Web" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:description" content="Just a little bit about me." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Edgar Web" />
        <meta property="twitter:image" content="/Logo.png" />
        <meta
          property="twitter:description"
          content="Just a little bit about me."
        />
      </Head>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
          <Typography variant="h3" component="h1" sx={{ mt: 4, mb: 2 }}>
            Hey!
          </Typography>
          <Typography variant="h5" component="div">
            {
              "My name is Edgar, I'm an web engineer with over 11 years of experience building web thingies. I love creating things using new technologies. On my free time I like to explore new cooking recepies, build wood things, play music, video games and just recently create costumes for my kids."
            }
          </Typography>
        </main>
      </Container>
      <Footer />
    </Box>
  );
}

export default About;
