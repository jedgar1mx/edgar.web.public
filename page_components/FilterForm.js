import * as React from "react";
import { useRouter } from 'next/router'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterForm({ tags, filter }) {
    const router = useRouter();
    const [tag, setTag] = React.useState(filter);
    const handleChange = (event) => {
      setTag(event.target.value);
      router.push({
        pathname: '/blog',
        query: { tag: event.target.value } 
      });
    };

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="topic-select-label">Topics</InputLabel>
          <Select
            labelId="topic-select-label"
            id="topic-select-label"
            value={tag}
            label="Topics"
            onChange={handleChange}
          >
            <MenuItem value="">All topics</MenuItem>
            {tags.data.map((tag) => (
                <MenuItem key={tag.id} value={tag.attributes.drupal_internal__tid}>{tag.attributes.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
}

export default FilterForm;
