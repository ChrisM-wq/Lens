
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import Avatar from '../assets/person1.png';
import { Box, Typography } from '@mui/material';
import TrendingArticle from './TrendingArticle';



import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TRENDING_ARTICLES = gql`
  query Query {
    getTrendingArticles {
      _id
      published
      title
      user_id {
        _id
        avatar
        username
      }
    }
  }
`;


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

  const { loading, error, data } = useQuery(GET_TRENDING_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const trendingArticles = data.getTrendingArticles;
  console.log(trendingArticles);
  return (
    <>
    <Box sx={{ px: 40, py: 5, display: 'flex', flexDirection: 'column', gap: 2, borderBottom: '1px solid #f6f6f6' }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center'}}>
        <TrendingUpRoundedIcon sx={{ border: 'solid 1px', fontSize: '18px', borderRadius: '100%', p: '2px'}} />
        <Typography variant="body" sx={{ fontWeight: 600 }}>Trending on Lens</Typography>
      </Box>
      <Box sx={{
    display: 'grid',
    gap: 5,
    gridTemplateColumns: 'repeat(3, 1fr)',
  }}>
      {trendingArticles.map((article, index) => (
        <TrendingArticle article={{index, ...article}} />
      ))}
      </Box>
    </Box>
    </>
  );
};

export default Trending;