import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
const Discover = () => {

  const buttonStyles = {
    backgroundColor: "#f2f2f2",
    color: "black.main",
    borderRadius: '50px',
    fontFamily: 'sans-serif',
    textTransform: "none",
    px: 3
  };

  return (
   
    <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: '80px', width: '400px', display: 'flex', flexDirection: 'column', gap: 2, p: 4, height: '100%' }}>
      <Typography variant="body" sx={{ fontWeight: 600 }}>Discover more of what matters to you</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'wrap'}}>
        
          <Button sx={buttonStyles}>Programming</Button>
          <Button sx={buttonStyles}>Data Science</Button>
          <Button sx={buttonStyles}>Technology</Button>
     
     
          <Button sx={buttonStyles}>Self Improvement</Button>
          <Button sx={buttonStyles}>Writing</Button>
          <Button sx={buttonStyles}>Relationships</Button>
       
          <Button sx={buttonStyles}>Machine Learning</Button>
          <Button sx={buttonStyles}>Productivity</Button>
          <Button sx={buttonStyles}>Politics</Button>
   
      </Box>
      <Typography variant="caption" sx={{ color: 'secondary.main'}}>See more topics</Typography>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, flexWrap: 'wrap'}}>
        <Typography variant="caption">Help</Typography>
        <Typography variant="caption">Status</Typography>
        <Typography variant="caption">About</Typography>
        <Typography variant="caption">Careers</Typography>
        <Typography variant="caption">Blog</Typography>
        <Typography variant="caption">Privacy</Typography>
        <Typography variant="caption">Terms</Typography>
        <Typography variant="caption">Text to speech</Typography>
        <Typography variant="caption">Teams</Typography>
      </Box>
    </Box>

  );
};

export default Discover;