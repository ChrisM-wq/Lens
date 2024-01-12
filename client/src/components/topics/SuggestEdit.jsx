import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SuggestEdit = () => {
  return (
    <Box sx={{ backgroundColor: '#F9F9F9', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, gap: 1, width: '100%', borderRadius: '5px' }}>
      <Typography variant="subtitle2">See a topic you think should be added or removed here?</Typography>
      <Link to={'/'} style={{ color: '#242021', fontSize: "14px", textDecoration: 'underline', fontFamily: 'sans-serif'}}>Suggest an edit</Link>
    </Box>
  );
};

export default SuggestEdit;