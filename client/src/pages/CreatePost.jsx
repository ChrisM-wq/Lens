import { Box, Button, FormLabel, Input, TextField, Typography } from "@mui/material";
import TextEditor from "../components/TextEditor";
import React, { useRef, useState } from "react";
import parse from 'html-react-parser';

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const CREATE_ARTICLE = gql`
  mutation CreateArticle(
    $title: String!
    $caption: String!
    $article: String!
    $image: String!
  ) {
    createArticle(
      title: $title
      caption: $caption
      article: $article
      image: $image
    ) {
      _id
      user_id
      published
      title
      caption
    }
  }
`;




const CreatePost = () => {

  

  


  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Result = e.target.result;
        setBase64Image(base64Result);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const [createArticle] = useMutation(CREATE_ARTICLE);
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const encodedArticle = encodeURIComponent(`${value}`);
      const encodedImage = encodeURIComponent(`${base64Image}`);
      const data = {
        title: title,
        caption: caption,
        article: encodedArticle,
        image: encodedImage
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
      <Box sx={{ width: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
      <TextField
        sx={{ width: '100%' }}
        label="Title"
        id="outlined-basic"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
      />

      <TextField
        sx={{ width: '100%' }}
        label="Caption"
        id="outlined-basic"
        variant="outlined"
        value={caption}
        onChange={handleCaptionChange}
      />
        <Input
          type="file"
          inputRef={inputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
        <Button variant="primary" sx={{ px: 10 }} onClick={handleButtonClick}>Upload Image</Button>
        <TextEditor value={value} setValue={setValue} />
        <Typography variant="h5" sx={{ alignSelf: 'start'}}>Preview:</Typography>
      </Box>
      

      <Box id="test" sx={{ width: '680px',display: 'flex', flexDirection: 'column', gap: 1 }}>
      
        {title !== '' && <Typography variant="h3">{title}</Typography>}
        {caption !== '' && <Typography>{caption}</Typography> }
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          {base64Image && (<img src={base64Image} alt="Uploaded" style={{ maxWidth: '100%' }} />)}
        </Box>
        


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