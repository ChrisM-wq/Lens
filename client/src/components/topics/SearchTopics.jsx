import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchTopics = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center'}}>
      <Typography variant="h3">Explore topics</Typography>
      <Box sx={{ width: '240px', height: '40px', backgroundColor: '#F9F9F9', borderRadius: '50px', display: 'flex', alignItems: 'center', px: 2, justifyContent: 'center'}}>
        <SearchIcon sx={{ color: '#6b6b6b', mr: 1, my: 0.5 }} />
        <InputBase
          sx={{ ml: 1, flex: 1, height: '40px', color: '#6b6b6b', fontSize: '14px' }}
          placeholder="Search all topics"
          inputProps={{ 'aria-label': 'Search all topics' }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2}}>
        <Typography variant="caption">Recommended:</Typography>
        <Typography variant="subtitle2">Data Science</Typography>
        <Typography variant="subtitle2">Self Improvement</Typography>
        <Typography variant="subtitle2">Writing</Typography>
      </Box>
    </Box>
  );
};

export default SearchTopics;