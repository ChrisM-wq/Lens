import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';

// Define the GraphQL query
const SEARCH_ARTICLES_BY_QUERY = gql`
query Query($topic: String!) {
  searchArticlesByTopic(topic: $topic) {
    _id
    caption
    published
    title
    tags
    image
    user_id {
      _id
      avatar
      username
    }
  }
}
`;

const TopicPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const searchQuery = queryParams.get('q');

  // if (!searchQuery) {
  //   // If there is no search query, you might want to navigate the user back to the home page or handle it as needed
  //   navigate('/explore-topics');
  //   return null;
  // }
  const { tag } = useParams();
  // Execute the GraphQL query using useQuery
  const { loading, error, data } = useQuery(SEARCH_ARTICLES_BY_QUERY, {
    variables: { topic: tag },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Search Results for: {tag}</h2>
      <ul>
        {data.searchArticlesByTopic.map(article => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.caption}</p>
            <p>Tags: {article.tags}</p>
          </li>
        ))}
      </ul>

      <Box sx={{ width: '1080px', display: 'flex', flexDirection: 'column', gap: 10}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography variant='h3' sx={{ fontSize: '42px'}}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</Typography>
        <Typography variant='body' sx={{ fontSize: '16px', color: '#6b6b6b'}}>Topic · 1.94K Followers · 72K Stories</Typography>
        <Button variant='primary'>Follow</Button>
      </Box>
      <Divider />
        {/* Recommended 2 big articles */}
        <Box>
          <Typography variant='h5'>Recommended stories</Typography>
          <Box sx={{ display: 'flex'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
          <img src={data?.searchArticlesByTopic[0]?.image} width={'572px'} height={'380px'}/>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <Avatar src={data?.searchArticlesByTopic[0]?.user_id?.avatar} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ fontSize: '14px'}}>{data?.searchArticlesByTopic[0]?.user_id?.username}</Typography>
          </Box>
          
          <Typography variant='h5' sx={{ maxHeight: '65px'}}>{data?.searchArticlesByTopic[0]?.title}</Typography>
          <Typography variant='caption' sx={{ maxHeight: '24px', overflow: 'hidden'}}>{data?.searchArticlesByTopic[0]?.caption}</Typography>
          <Typography variant='caption'>7 min read · 18 hours ago</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
          <img src={data?.searchArticlesByTopic[1]?.image} width={'572px'} height={'380px'}/>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <Avatar src={data?.searchArticlesByTopic[1]?.user_id?.avatar} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ fontSize: '14px'}}>{data?.searchArticlesByTopic[1]?.user_id?.username}</Typography>
          </Box>
          
          <Typography variant='h5' sx={{ maxHeight: '65px'}}>{data?.searchArticlesByTopic[1]?.title}</Typography>
          <Typography variant='caption' sx={{ maxHeight: '24px', overflow: 'hidden'}}>{data?.searchArticlesByTopic[1]?.caption}</Typography>
          <Typography variant='caption'>7 min read · 18 hours ago</Typography>
          </Box>
          </Box>
          {/* Actions */}
        </Box>
        {/* Recommended 6 medium articles */}
        <Box>

        </Box>

      </Box>
     




    </Box>
  );
};

export default TopicPage;