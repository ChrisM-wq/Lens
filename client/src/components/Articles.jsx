

import Avatar from '../assets/person1.png';
import { Box, Typography } from '@mui/material';
import Article from './Article';
import Image from '../assets/laptop.jpg';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
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
];

const GET_ARTICLES = gql`
  query Query {
    getArticles {
      _id
      title
      published
      user_id
    }
  }
`;




const Articles = () => {

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data.getArticles;




  return (
    <>
    <Box sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 2, borderBottom: '1px solid #f6f6f6' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}>
      {articles.map((article) => (
        <Article article={article} />
      ))}
      </Box>
    </Box>
    </>
  );
};

export default Articles;