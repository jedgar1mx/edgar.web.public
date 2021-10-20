import * as React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://jedgar1mx.com/">
        Edgar Web
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "#fff", py: 6 }}
    >
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" component="p">
          Just my personal idea storage.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
