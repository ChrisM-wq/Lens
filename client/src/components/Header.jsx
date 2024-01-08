import { Box, Button, Typography } from "@mui/material";
import RandomText from "./RandomText";

const Header = () => {
  return (
    <>
    <Box sx={{ display: 'flex', minHeight: '455px', justifyContent: 'space-between', py: 1, borderBottom: 1, borderColor: 'black.main', backgroundColor: 'primary.main', marginTop: '80px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 40, gap: 5}}>
        <Typography variant="h1">Explore more.</Typography>
        <Typography variant="important">Discover stories, thinking, and expertise <br /> from writers on any topic.</Typography>
        <Button variant="primary" sx={{ alignSelf: 'start', px: 5, fontSize: '20px',  border: "2px solid", borderColor: 'black.main'}}>Start reading</Button>
      </Box>
      <RandomText />
    </Box>
    </>
  );
};

export default Header;