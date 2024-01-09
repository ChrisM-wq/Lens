import Box from '@mui/material/Box';
import Header from '../components/Header';
import Discover from '../components/Discover';
import Trending from '../components/Trending';
import Articles from '../components/Articles';
import TextEditor from '../components/TextEditor';

const Home = () => {
  return (
    <>
      <Header />
      <Trending />
      <Box sx={{ display: 'flex', px: 40, gap: 10 }}>
        <Articles />
        <Discover />
      </Box>
      <TextEditor />
    </>
  );
};

export default Home;
