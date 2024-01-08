
import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Discover from './components/Discover';
import Trending from './components/Trending';
import Articles from './components/Articles';

function App() {

 

  return (
    <>
      <Navbar />
      <Header />
      <Trending />

      <Box sx={{ display: 'flex', px: 40, gap: 10 }}>
        <Articles />
        <Discover />
      </Box>
    </>
  );
}

export default App;