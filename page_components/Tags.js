import * as React from "react";
import { useContext } from "react";
import { router } from 'next/router';
import Button from '@mui/material/Button';

const updateFilters = (tags) => {
  const { setAuthenticated } = useContext(authContext);  
  router.push('/about');
}

function Tag(tag) {

  return (
    <Button variant="contained" onClick={() => router.push('/about')}>
      Contained
    </Button>
  );
}


function Tags(props) {
  const { tags } = props;

  return (
    <section>
      {tags.map((tag) => (
        <Tag tag={tag}></Tag>
      ))}
    </section>
  );
}

export default Tags;
