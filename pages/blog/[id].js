import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Breadcrumbs, Box, Container, Grid, Typography } from "@mui/material";
import { Markup } from "interweave";
import moment from "moment";
import Tags from "../../page_components/Tags";
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

const buildDesktop = (post) => {
  return (
    <Box
      sx={{ mt: 2, position: "relative", width: "100%", height: "35em" }}
    >
      <Image
        src={`https://data.jedgar1mx.com${post.included[0].attributes.uri.url}`}
        alt={post.included[0].attributes.filename}
        layout="fill"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(700, 475)
        )}`}
      />
    </Box>
  );
}

const buildMobile = (post) => {
  return (
    <Box
      sx={{ mt: 2, position: "relative", width: "100%", height: "25em" }}
    >
      <Image
        src={`https://data.jedgar1mx.com${post.included[0].attributes.uri.url}`}
        alt={post.included[0].attributes.filename}
        layout="fill"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(700, 475)
        )}`}
      />
    </Box>
  );
}

export default function Post({ post }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(document.body.clientWidth);
  });

  return (
    <Box>
      <Head>
        <title>Edgar Web | {post.data[0].attributes.title}</title>
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
        <meta name="description" content={post.data[0].attributes.body.summary} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.data[0].attributes.title} />
        <meta property="og:image" content="/Logo.png" />
        <meta
          property="og:description"
          content={post.data[0].attributes.body.summary}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={post.data[0].attributes.title} />
        <meta property="twitter:image" content="/Logo.png" />
        <meta
          property="twitter:description"
          content={post.data[0].attributes.body.summary}
        />
      </Head>
      <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
        <Header title="Edgar Web" width={width} />
        <main>
          <Breadcrumbs aria-label="breadcrumb"  sx={{ mt: 2 }}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Article
            </Typography>
          </Breadcrumbs>
          {(width > 500) ? buildDesktop(post) : buildMobile(post)}
          <Typography variant="h4" component="h1">
            {post.data[0].attributes.title}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2} xl={2}>
              <Typography variant="caption" component="div">
                {post.included[1].attributes.display_name} on{" "}
                {moment(post.data[0].attributes.created).format("MMM Do, YYYY")}
              </Typography> 
            </Grid>
            <Grid item xs={12} md={10} xl={10}>
              <Tags tags={post.included.slice(2)}></Tags>
            </Grid>
          </Grid>
          <Markup content={post.data[0].attributes.body.processed} />
        </main>
      </Container>
      <Footer />
    </Box>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://data.jedgar1mx.com/jsonapi/node/article/");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: {
      id: post.attributes.field_alias,
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
    `https://data.jedgar1mx.com/jsonapi/node/article?filter[field_alias]=${params.id}&include=field_image,uid,field_tags`
  );
  const post = await res.json();
  // Pass post data to the page via props
  return {
    props: { post },
    revalidate: 60,
  };
}
