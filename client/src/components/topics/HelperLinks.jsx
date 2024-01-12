import { Box, Typography } from "@mui/material";

const HelperLinks = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '1080px', display: 'flex', gap: 2, py: 3 }}>
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

export default HelperLinks;