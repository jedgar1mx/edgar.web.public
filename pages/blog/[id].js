import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../page_sections/Header';
import PageBreadcrumbs from '../page_sections/PageBreadcrumbs';
import Main from '../page_sections/Main';
import Footer from '../page_sections/Footer';
import { Markup } from 'interweave';
import moment from 'moment';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Woodworking', url: '#' },
  { title: 'Music', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const theme = createTheme(
  {
    palette: {
      primary: {
        main:'#000',
      },
      secondary: {
        main:'#ffc400',
      },
    },
  }
);
  

export default function Post({ post }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Edgar Web" sections={sections} />
        <PageBreadcrumbs></PageBreadcrumbs>
        <main>
            <img style={{ width: '100%' }} src={`http://data.jedgar1mx.com${post.included[0].attributes.uri.url}`} alt={post.included[0].attributes.filename} />
            <Typography variant="h5" component="div">
              {post.data.title}
            </Typography>
            <Typography variant="small" component="div">
              By {post.included[1].attributes.display_name} | {moment(post.data.attributes.created).format("MMM Do, YYYY")}
            </Typography>
            <Markup content={post.data.attributes.body.processed} />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://data.jedgar1mx.com/jsonapi/node/article/')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: { 
      id: post.id
    },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://data.jedgar1mx.com/jsonapi/node/article/${params.id}?include=field_image,uid`)
  const post = await res.json()
console.log(post);
  // Pass post data to the page via props
  return { props: { post } }
}
