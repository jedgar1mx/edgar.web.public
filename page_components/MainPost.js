import * as React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainPost.module.css";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

function MainPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        mb: 4,
        mt: 2,
        borderRadius: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "primary",
        }}
      />

      <Link href={`/blog/${post.link}`} passHref>
        <a className={styles.MainPost}>
          <Grid container alignItems="stretch">
            <Grid
              item
              md={5}
              sx={{ position: "relative", width: "100%", minHeight: 300 }}
            >
              <Image
                src={post.image}
                alt={post.imageText}
                layout="fill"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </Grid>
            <Grid item md={7}>
              <Box
                className={styles.HoverEffect}
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  height: "100%",
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="body1" color="secondary.main">
                  {post.linkText}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </a>
      </Link>
    </Paper>
  );
}

MainPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPost;
