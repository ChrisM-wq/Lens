import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/authReducers';
import Cookies from "js-cookie";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from "react-router-dom";
const UserOptions = () => {

  // ========== User ==========
  let email = useSelector((state) => state.auth.user.email);

  // ========== Logout ==========
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      // logout function for backend
      Cookies.remove('authenticated');
      Cookies.remove('jwt');
      dispatch(logout());
    } catch (error) {
      console.log(error)
    }
  };

  // ========== Styles ==========
  const userOptionsBoxStyles = {
    position: 'absolute',
    top: '100%',
    right: 10,
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    zIndex: 1,
    transition: 'ease 0.3s',
    width: '264px'
    
  };
  const userOptionsBtnStyles = {
    padding: '8px 24px',
  };

  return (
    <Box sx={ userOptionsBoxStyles }>
      <Link to={'/profile'} style={{ display: 'flex', flexDirection: 'column', padding: '16px 0px', gap: 1, cursor: 'pointer', textDecoration: 'none',  transition: 'ease 0.3s',}}
        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#eee' }}
        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}>
        <Typography
          variant="options"
          sx={{...userOptionsBtnStyles, display: 'flex', alignItems: 'center', gap: 1}}
        
        >
          <PersonOutlinedIcon sx={{ fontSize: '18px' }} /> Profile
        </Typography>
        </Link>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px 0px', gap: 1, cursor: 'pointer',  transition: 'ease 0.3s',}} onClick={handleLogout}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#eee' }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}>
        <Typography variant="options" sx={{...userOptionsBtnStyles, padding: '0 24px'}}>
          Sign out
      </Typography>
      <Typography variant="options" sx={{...userOptionsBtnStyles, padding: '0 24px', fontSize: '13px'}}>
        {email}
      </Typography>
        </Box>
        
    </Box>
  );
};

export default UserOptions;