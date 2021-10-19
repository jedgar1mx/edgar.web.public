import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './page_sections/Header';
import PageBreadcrumbs from './page_sections/PageBreadcrumbs';
import Main from './page_sections/Main';
import MainFeaturedPost from './page_components/MainPost';
import Footer from './page_sections/Footer';

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
  
const imageUrlFromPost = (post, assets) => {
  return assets?.find((asset) => asset.id == post.relationships.field_image.data.id)
}

export default function Home({ posts }) {
  console.log(posts.data[0])
  let image = imageUrlFromPost(posts.data[0], posts.included)
  console.log(image)
  let mainFeaturedPost = {
    title: posts.data[0].attributes.title,
    description: posts.data[0].attributes.body.summary,
    image: `http://data.jedgar1mx.com${image.attributes.uri.url}`,
    imageText: image.attributes.filename,
    link: posts.data[0].id,
    linkText: 'Continue reading…',
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Edgar Web" sections={sections} />
        <PageBreadcrumbs></PageBreadcrumbs>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Link href="/blog">
            <a>
              <h2>Articles &rarr;</h2>
              <p>
                Testing articles.
              </p>
            </a>
          </Link>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://data.jedgar1mx.com/jsonapi/node/article?include=field_image,uid&sort=created')
  const posts = await res.json()

  console.log(posts);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
