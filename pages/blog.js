import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './page_sections/Header';
import Footer from './page_sections/Footer';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Woodworking', url: '#' },
    { title: 'Music', url: '#' },
  ];

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

function Blog({ posts }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
            <Header title="Edgar Web" sections={sections} />
            <main>
            {posts.data.map((post) => (
                        <Card key={post.id} sx={{ minWidth: 275 }}>
                            <CardContent>
                            <Typography variant="h5" component="div">
                                {post.attributes.title}
                            </Typography>
                            <Typography variant="body2">
                                {post.attributes.body.summary}
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Link href={`/blog/${post.id}`}>
                            <Button size="small">Learn More</Button>
                            </Link>
                            </CardActions>
                        </Card>
                    ))}
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
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://data.jedgar1mx.com/jsonapi/node/article')
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

export default Blog