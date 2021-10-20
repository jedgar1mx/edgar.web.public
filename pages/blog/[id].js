import { Box, Typography, Container } from "@mui/material";
import Header from "../page_sections/Header";
import Footer from "../page_sections/Footer";
import { Markup } from "interweave";
import moment from "moment";

export default function Post({ post }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
          <Box sx={{ mt: 2 }}>
          <img
            style={{ width: "100%" }}
            src={`http://data.jedgar1mx.com${post.included[0].attributes.uri.url}`}
            alt={post.included[0].attributes.filename}
          />
          </Box>
          <Typography variant="h5" component="div">
            {post.data.title}
          </Typography>
          <Typography variant="caption" component="div">
            By {post.included[1].attributes.display_name} |{" "}
            {moment(post.data.attributes.created).format("MMM Do, YYYY")}
          </Typography>
          <Markup content={post.data.attributes.body.processed} />
        </main>
      </Container>
      <Footer />
    </Box>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://data.jedgar1mx.com/jsonapi/node/article/");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: {
      id: post.id,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://data.jedgar1mx.com/jsonapi/node/article/${params.id}?include=field_image,uid`
  );
  const post = await res.json();
  // Pass post data to the page via props
  return { props: { post } };
}
