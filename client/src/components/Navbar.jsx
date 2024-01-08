
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Logo from '../assets/LensLogoBlack.png';
import { useEffect, useState } from 'react';



const Navbar = () => {

  
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeBackgroundColor = scrollPosition >= 500;


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ px: 40, borderBottom: 1, borderColor: 'black.main', backgroundColor: changeBackgroundColor ? "#fff" : 'primary.main', transition: '0.4s ease' }} elevation={0}>
        <Toolbar sx={{  height: '80px', px: '0 !important'}}>
          <img src={Logo} width={'40px'}/>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Lens
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>
            <Typography variant='body'>Our story</Typography>
            <Typography variant='body'>Membership</Typography>
            <Typography variant='body'>Write</Typography>
            <Typography variant='body'>Sign in</Typography>
            <Button variant="primary" sx={{ alignSelf: 'start', px: 3}}>Get started</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Navbar;