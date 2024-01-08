
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import Avatar from '../assets/person1.png';
import { Box, Typography } from '@mui/material';
import TrendingArticle from './TrendingArticle';

const data = [
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title:"The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read'
  }
]


const Trending = () => {
  return (
    <>
    <Box sx={{ px: 30, py: 5, display: 'flex', flexDirection: 'column', gap: 2, borderBottom: '1px solid #f6f6f6' }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center'}}>
        <TrendingUpRoundedIcon sx={{ border: 'solid 1px', fontSize: '18px', borderRadius: '100%', p: '2px'}} />
        <Typography variant="body" sx={{ fontWeight: 600 }}>Trending on Lens</Typography>
      </Box>
      <Box sx={{
    display: 'grid',
    gap: 5,
    gridTemplateColumns: 'repeat(3, 1fr)',
  }}>
      {data.map((article, index) => (
        <TrendingArticle article={{index, ...article}} />
      ))}
      </Box>
    </Box>
    </>
  );
};

export default Trending;