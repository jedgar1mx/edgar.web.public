import Link from "next/link";
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import Header from "../page_sections/Header";
import MainFeaturedPost from "../page_components/MainPost";
import Footer from "../page_sections/Footer";

const imageUrlFromPost = (post, assets) => {
  return assets?.find(
    (asset) => asset.id == post.relationships.field_image.data.id
  );
};

export default function Home({ posts }) {
  let image = imageUrlFromPost(posts.data[0], posts.included);
  let mainFeaturedPost = {
    title: posts.data[0].attributes.title,
    description: posts.data[0].attributes.body.summary,
    image: `http://data.jedgar1mx.com${image.attributes.uri.url}`,
    imageText: image.attributes.filename,
    link: posts.data[0].id,
    linkText: "Continue reading…",
  };
  return (
    <Box>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 2 }}>
            Latest Posts
          </Typography>
          <Grid container>
          {posts.data.slice(1).map((post) => (
            <Grid key={post.id} item xs={12} md={4} xl={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "http://data.jedgar1mx.com/jsonapi/node/article?include=field_image,uid&sort=created"
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
