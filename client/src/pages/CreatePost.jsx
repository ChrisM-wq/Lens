import { Box, Button, Typography } from "@mui/material";
import TextEditor from "../components/TextEditor";
import React, { useState } from "react";
import parse from 'html-react-parser';

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const CREATE_ARTICLE = gql`
  mutation CreateArticle(
    $title: String!
    $caption: String!
    $article: String!
  ) {
    createArticle(
      title: $title
      caption: $caption
      article: $article
    ) {
      _id
      user_id
      published
      title
      caption
      article
    }
  }
`;




const CreatePost = () => {

  const [formData, setFormData] = useState({
    title: 'Test',
    caption: 'Article',
    article: '',
  });

  const [createArticle] = useMutation(CREATE_ARTICLE);
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const encodedArticle = encodeURIComponent(`${value}`);
      const data = {
        title: formData.title,
        caption: formData.caption,
        article: encodedArticle
      }
      await createArticle({ variables: data });
      console.log('Article created successfully!');
      // Additional logic after successful creation
    } catch (error) {
      console.error('Error creating article:', error.message);
      // Handle error, show error message, etc.
    }
  };

  

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 20, py: 20 }}>
      <Box sx={{ width: '1000px' }}>
        <TextEditor value={value} setValue={setValue} />
      </Box>
      <Box id="test" sx={{ width: '800px' }}>
        {parse(`${value}`)}
      </Box>
      <div>
        {value}
      </div>

      <Box>
        <Button variant="pinkBtn" onClick={handleSubmit}>Publish</Button>
      </Box>
    </Box>
  );
};

export default CreatePost;