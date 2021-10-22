import * as React from "react"
import { Box, Card, CardActionArea, CardContent, Container, Button, Typography, Grid } from "@mui/material"
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
          <Grid container spacing={2} alignItems="stretch">
          {posts.data.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} passHref>
              <Grid item xs={12} md={4} xl={3}>
                <Card sx={{ minWidth: 275, borderRadius: 0 }}>
                  <CardActionArea>
                    <CardContent sx={{ minHeight: 225 }}>
                      <Typography variant="h5" component="div" sx={{ borderLeft: 4, borderColor: "secondary.main", pl: 1, mb: 2 }}>
                        {post.attributes.title}
                      </Typography>
                      <Typography variant="body1">
                        {post.attributes.body.summary}
                      </Typography>
                      <Typography variant="button" sx={{ mt: 2 }}>
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Link>
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
  const res = await fetch("http://data.jedgar1mx.com/jsonapi/node/article?page[limit]=12");
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
