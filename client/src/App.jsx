import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ marginTop: '80px'}}>
      <Outlet />
    </Box>
    </>
  );
};

export default App;