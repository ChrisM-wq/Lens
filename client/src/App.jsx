import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { Box } from '@mui/material';
import LoggedInNavbar from './components/LoggedInNavbar';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/authReducers'
import Cookies from 'js-cookie';
import { useQuery, gql } from '@apollo/client';
import client from './client';

const VALIDATE_USER = gql`
query Query {
  validateUser {
    _id
    avatar
    email
    token
    username
  }
}`;
const App = () => {

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated && Cookies.get('authenticated') && Cookies.get('jwt')) {
        try {
          const { data } = await client.query({ query: VALIDATE_USER });
          dispatch(login(data.validateUser));
        } catch (error) {
          console.error('Error validating user:', error);
          Cookies.remove('authenticated');
          Cookies.remove('jwt');
          dispatch(logout());
        }
      }
    };

    fetchData();
  }, [dispatch, isAuthenticated]);

  return (
    <>
    { isAuthenticated ? <LoggedInNavbar /> : <Navbar /> }
    <Box sx={{ marginTop: isAuthenticated ?  '0' : '80px'}}>
      <Outlet />
    </Box>
    </>
  );
};

export default App;