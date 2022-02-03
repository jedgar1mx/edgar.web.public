import * as React from "react";
import Head from "next/head";
import {
  Breadcrumbs,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Header from "../page_sections/Header";
import Footer from "../page_sections/Footer";

function Blog({ posts }) {
  return (
    <Box>
      <Head>
        <title>Edgar Web | The Idea Vault</title>
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
        <meta name="description" content="The Idea Vault." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edgar Web" />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:description" content="The Idea Vault." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Edgar Web" />
        <meta property="twitter:image" content="/Logo.png" />
        <meta property="twitter:description" content="The Idea Vault." />
      </Head>
      <Container maxWidth="lg" sx={{ minHeight: "90vh", mb: 2 }}>
        <Header title="Edgar Web" />
        <main>
          <Breadcrumbs aria-label="breadcrumb"  sx={{ mt: 2 }}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Blog
            </Typography>
          </Breadcrumbs>
          <Typography variant="h4" component="h1" sx={{ mt: 2, mb: 2 }}>
            Past Posts
          </Typography>
          <Grid container spacing={2} alignItems="stretch">
            {posts.data.map((post) => (
              <Link key={post.id} href={`/blog/${post.attributes.field_alias}`} passHref>
                <Grid item xs={12} md={4} xl={3}>
                  <Card sx={{ minWidth: 275, borderRadius: 0 }}>
                    <CardActionArea>
                      <CardContent sx={{ minHeight: 225 }}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            borderLeft: 4,
                            borderColor: "secondary.main",
                            pl: 1,
                            mb: 2,
                          }}
                        >
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
  const res = await fetch(
    "http://data.jedgar1mx.com/jsonapi/node/article?page[limit]=12&sort=-created"
  );
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
