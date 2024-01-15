import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Box } from '@mui/material';

// Define the GraphQL query
const SEARCH_ARTICLES_BY_QUERY = gql`
query Query($topic: String!) {
  searchArticlesByTopic(topic: $topic) {
    _id
    caption
    published
    title
    user_id
    tags
  }
}
`;

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  if (!searchQuery) {
    // If there is no search query, you might want to navigate the user back to the home page or handle it as needed
    navigate('/explore-topics');
    return null;
  }

  // Execute the GraphQL query using useQuery
  const { loading, error, data } = useQuery(SEARCH_ARTICLES_BY_QUERY, {
    variables: { topic: searchQuery },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box>
      <h2>Search Results for: {searchQuery}</h2>
      <ul>
        {data.searchArticlesByTopic.map(article => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.caption}</p>
            <p>Tags: {article.tags}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SearchResults;