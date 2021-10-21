import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import { Markup } from "interweave";
import moment from "moment";
import Header from "../../page_sections/Header";
import Footer from "../../page_sections/Footer";

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

export default function Post({ post }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" />
        <main>
          <Box
            sx={{ mt: 2, position: "relative", width: "100%", height: "25em" }}
          >
            <Image
              src={`http://data.jedgar1mx.com${post.included[0].attributes.uri.url}`}
              alt={post.included[0].attributes.filename}
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </Box>
          <Typography variant="h5" component="div">
            {post.data.title}
          </Typography>
          <Typography variant="caption" component="div">
            By {post.included[1].attributes.display_name} |
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
