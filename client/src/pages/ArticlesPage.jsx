import { Box, Typography } from "@mui/material";
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";

const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($articleId: ID!) {
    getArticleById(articleId: $articleId) {
      _id
      title
      caption
      article
      image
    }
  }
`;

const ArticlesPage = () => {
  const { articleId } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { articleId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const article = data.getArticleById;
  console.log(data);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Optionally, you can include a dependency array to ensure the effect runs only once
  }, []);
  return (
    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', py: 5 }}>
      <Box id="test" sx={{ width: '680px',display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h3">{article.title}</Typography>
        <Typography>{article.caption}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          {article.image && (<img src={article.image} alt="Uploaded"  />)}
        </Box>
        {parse(`${article.article}`)}
      </Box>
    </Box>
  );
};

export default ArticlesPage;