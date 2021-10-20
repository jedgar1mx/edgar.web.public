import * as React from "react";
import { Typography, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PageBreadcrumbs() {
  const router = useRouter();
  return (
    <Breadcrumbs aria-label="breadcrumb">
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
        Page
      </Typography>
    </Breadcrumbs>
  );
}
