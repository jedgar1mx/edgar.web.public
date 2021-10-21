import * as React from "react";
import PropTypes from "prop-types";
import Logo from "../page_components/Logo";
import {
  Grid,
  Box,
  Link,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";

const sections = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
];

function Header(props) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "secondary" }}>
        <Grid container spacing={0.5}>
          <Grid item md={1}>
            <Logo />
          </Grid>
          <Grid item md={2} sx={{ display: "flex" }}>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              sx={{ margin: "auto" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            md={9}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ margin: "auto 0" }}>
              {sections.map((section) => (
                <Link
                  color="primary"
                  noWrap
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  sx={{ p: 1, flexShrink: 0 }}
                  align="right"
                >
                  {section.title}
                </Link>
              ))}
              <Link
                color="primary"
                noWrap
                key="github"
                variant="body2"
                href="https://github.com/jedgar1mx"
                sx={{ p: 1, flexShrink: 0 }}
                align="right"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
              <Link
                color="primary"
                noWrap
                key="twitter"
                variant="body2"
                href="https://twitter.com/jedgar1mx"
                sx={{ p: 1, flexShrink: 0 }}
                align="right"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </Link>
              <Link
                color="primary"
                noWrap
                key="drupal"
                variant="body2"
                href="https://www.drupal.org/u/jedgar1mx"
                sx={{ p: 1, flexShrink: 0 }}
                align="right"
                target="_blank"
                rel="noreferrer"
              >
                Drupal
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
