import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './page_sections/Header';
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
  

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Edgar Web" sections={sections} />
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
