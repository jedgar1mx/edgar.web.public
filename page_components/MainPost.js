import * as React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image"

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
      <Grid container>
        <Grid item md={6} sx={{ position: "relative", width: "100%"}}>
          <Image 
            src={post.image}
            alt={post.imageText}
            layout="fill"
          />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
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
            <Link href={`/blog/${post.link}`}>
              <a>{post.linkText}</a>
            </Link>
          </Box>
        </Grid>
      </Grid>
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
