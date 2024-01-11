
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/LensLogoBlack.png';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import person from '../assets/person1.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Collapse, InputBase } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/authReducers';
import Cookies from 'js-cookie';
import UserOptions from './navigation/UserOptions';
const LoggedInNavbar = () => {

  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);




  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    setDropdownOpen(false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ borderBottom: 1, borderColor: '#f2f2f2', backgroundColor: '#fff', height: '58px', transition: 'linear 0.1s', transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }} elevation={0}>
        <Toolbar>
          <Box component="div" style={{ display: 'flex', flexGrow: 1, textDecoration: 'none', gap: 5,  }}>
            <Link to={'/'}>
              <img src={Logo} width={'40px'}/>
            </Link>
            <Box sx={{ width: '240px', height: '40px', backgroundColor: '#F9F9F9', borderRadius: '50px', display: 'flex', alignItems: 'center', px: 2, justifyContent: 'center'}}>
              <SearchIcon sx={{ color: '#6b6b6b', mr: 1, my: 0.5 }} />
              <InputBase
                sx={{ ml: 1, flex: 1, height: '40px', color: '#6b6b6b', fontSize: '14px' }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search' }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>

            <Link to={'/write'} style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              justifyContent: 'center',
              backgroundColor: 'transparent',  // Set a default background color
              transition: 'background-color 0.3s ease',
              padding: '4px 8px',
              borderRadius: '5px'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#eee' }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
              <CreateOutlinedIcon sx={{ color: '#6b6b6b' }}/>
              <Typography variant='body' sx={{ color: '#6b6b6b', fontSize: '14px' }}>Write</Typography>
            </Link>

            <Link to={'/write'} style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              justifyContent: 'center',
              backgroundColor: 'transparent',  // Set a default background color
              transition: 'background-color 0.3s ease',
              padding: '4px 8px',
              borderRadius: '5px'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#eee' }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
              <NotificationsOutlinedIcon sx={{ color: '#6b6b6b' }}/>
            </Link>
            <Avatar alt="avatar" src={user.avatar} sx={{ width: 32, height: 32 }} onClick={handleAvatarClick}/>
            {isDropdownOpen && <UserOptions />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedInNavbar;