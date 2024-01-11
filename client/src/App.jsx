import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { Box } from '@mui/material';
import LoggedInNavbar from './components/LoggedInNavbar';
import { useState } from 'react';

const App = () => {
  

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
    { !loggedIn ? <Navbar setLoggedIn={setLoggedIn} /> : <LoggedInNavbar setLoggedIn={setLoggedIn} /> }
    <Box sx={{ marginTop: loggedIn ? '80px' : '0'}}>
      <Outlet loggedIn={loggedIn} />
    </Box>
    </>
  );
};

export default App;