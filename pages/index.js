import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
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
      <Head>
        <title>Edgar Web | My personal idea storage</title>
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
        <meta
          name="description"
          content="Welcome to Edgar Web just my personal idea storage."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edgar Web" />
        <meta property="og:image" content="/Logo.png" />
        <meta
          property="og:description"
          content="Welcome to Edgar Web just my personal idea storage."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Edgar Web" />
        <meta property="twitter:image" content="/Logo.png" />
        <meta
          property="twitter:description"
          content="Welcome to Edgar Web just my personal idea storage."
        />
      </Head>
      <Container maxWidth="lg" sx={{ minHeight: "90vh", mb: 2 }}>
        <Header title="Edgar Web" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2}>
            {posts.data.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} passHref>
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "http://data.jedgar1mx.com/jsonapi/node/article?page[limit]=5&include=field_image,uid&sort=-created"
  );
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      revalidate: 60,
    },
  };
}
