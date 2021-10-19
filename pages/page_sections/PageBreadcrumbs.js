import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';


export default function PageBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        href="/"
      >
        <a>
        Home
        </a>
      </Link>
      <Link
        href="/blog"
      >
        <a>
        Blog
        </a>
      </Link>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        Page
      </Typography>
    </Breadcrumbs>
  );
}