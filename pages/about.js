import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "../page_sections/Header";
import Footer from "../page_sections/Footer";

function About() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
            <Typography variant="h3" component="h1" sx={{ mt: 4, mb: 2 }}>
                Hey!
            </Typography>
            <Typography variant="h5" component="div">
                {"My name is Edgar, I\'m an web engineer with over 11 years of experience building web thingies. I love creating things using new technologies. On my free time I like to explore new cooking recepies, build wood things, play music, video games and just recently create costumes for my kids."}
            </Typography>
        </main>
      </Container>
      <Footer />
    </Box>
  );
}

export default About;
