import { Box } from "@mui/material";
import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import parse from 'html-react-parser';
const GET_ARTICLES = gql`
  query {
    getArticles {
      _id
      user_id
      published
      title
      caption
      article
    }
  }
`;

const ArticlesPage = () => {

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data)
  const articles = data.getArticles;

  return (
    <Box>
      <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.caption}</p>
            <Box id="test" sx={{ width: '800px' }}>
              {parse(`${article.article}`)}
            </Box>
          </li>
        ))}
      </ul>
    </div>
    </Box>
  );
};

export default ArticlesPage;