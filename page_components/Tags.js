import * as React from "react";
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';

function Tag(tag) {
  const router = useRouter();

  return (
    <Button sx={{ marginRight: 1 }} variant="contained" color="secondary" size="medium" onClick={() => {
      router.push({
          pathname: '/blog',
          query: { tag: tag.tag.attributes.drupal_internal__tid } 
      })}}>
      {tag.tag.attributes.name}
    </Button>
  );
}


function Tags(props) {
  const { tags } = props;

  return (
    <section>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag}></Tag>
      ))}
    </section>
  );
}

export default Tags;
