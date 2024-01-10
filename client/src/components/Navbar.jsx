
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Logo from '../assets/LensLogoBlack.png';
import { useEffect, useState } from 'react';


import Logo2 from '../assets/LensLogoColor.png';
import { Link } from 'react-router-dom';

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
         
          <Link to={'/'} component="div" style={{ display: 'flex', flexGrow: 1, textDecoration: 'none' }}>
            <img src={changeBackgroundColor ? Logo2 : Logo} width={'40px'}/>
            <Typography variant="h4">
              Lens
            </Typography>
          </Link>
          
          
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>
            
            <Link to={'/articles'} style={{ textDecoration: 'none' }}>
              <Typography variant='body'>Our story</Typography>
            </Link>
            <Typography variant='body'>Membership</Typography>
            <Link to={'/write'} style={{ textDecoration: 'none' }}>
              <Typography variant='body'>Write</Typography>
            </Link>
            <Typography variant='body'>Sign in</Typography>
            <Button variant={changeBackgroundColor ? "pinkBtn" : "primary"} sx={{ alignSelf: 'start', px: 3}}>Get started</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Navbar;