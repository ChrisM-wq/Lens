import Box from '@mui/material/Box';
import Header from '../components/Header';
import Discover from '../components/Discover';
import Trending from '../components/Trending';
import Articles from '../components/Articles';
import HomePage from './user/HomePage';
import { useSelector } from 'react-redux';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
    {!isAuthenticated ? ( 
      <>
        <Header />
        <Trending />
        <Box sx={{ display: 'flex', px: 40, gap: 10 }}>
          <Articles />
          <Discover />
        </Box>
      </>
    ) : <HomePage /> }
    </>
  );
};

export default Home;
