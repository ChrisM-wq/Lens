

import Avatar from '../assets/person1.png';
import { Box, Typography } from '@mui/material';
import Article from './Article';
import Image from '../assets/laptop.jpg';


const data = [
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title: "The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  },
  {
    avatar: Avatar,
    author: 'Test name',
    title:"The Symbolism of 'Saltburn' That You Probably Missed",
    date: 'Jan 5',
    length: '8 min read',
    caption: 'Yet another trying time has come, but I believe in their resilience',
    image: Image
  }
]


const Articles = () => {
  return (
    <>
    <Box sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 2, borderBottom: '1px solid #f6f6f6' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}>
      {data.map((article) => (
        <Article article={article} />
      ))}
      </Box>
    </Box>
    </>
  );
};

export default Articles;