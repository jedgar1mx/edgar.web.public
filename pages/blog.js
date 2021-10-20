import * as React from "react"
import { Box, Card, CardActions, CardContent, Container, Button, Typography, Grid } from "@mui/material"
import Link from "next/link"
import Header from "../page_sections/Header"
import Footer from "../page_sections/Footer"

function Blog({ posts }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
          <Typography variant="h4" component="h1" sx={{ mt: 2, mb: 2 }}>
            Past Posts
          </Typography>
          <Grid container>
          {posts.data.map((post) => (
            <Grid key={post.id} item xs={12} md={4} xl={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.attributes.title}
                </Typography>
                <Typography variant="body2">
                  {post.attributes.body.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/blog/${post.id}`} passHref>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
            </Grid>
          ))}
          </Grid>
        </main>
      </Container>
      <Footer />
    </Box>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://data.jedgar1mx.com/jsonapi/node/article");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
