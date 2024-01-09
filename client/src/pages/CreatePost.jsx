import { Box, Button, Typography } from "@mui/material";
import TextEditor from "../components/TextEditor";
import React, { useState } from "react";
import parse from 'html-react-parser';

const CreatePost = () => {

  const [value, setValue] = useState('');

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
        <Button variant="pinkBtn">Publish</Button>
      </Box>
    </Box>
  );
};

export default CreatePost;