import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/LensLogoBlack.png';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const Navbar = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'black.main',}}>
      <AppBar position="static" sx={{ px: 30 }}>
        <Toolbar sx={{  height: '80px'}}>
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