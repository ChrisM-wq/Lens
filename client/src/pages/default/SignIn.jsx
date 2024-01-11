import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authReducers';
import { useMutation, gql } from '@apollo/client';
import Cookies from 'js-cookie';

const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      _id
      avatar
      email
      token
      username
    }
  }
`;



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation] = useMutation(LOGIN);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({ variables: {loginInput: {
        email: email,
        password: password
      }}});
      Cookies.set('authenticated', true);
      Cookies.set('jwt', data.loginUser.token);
      dispatch(login( data.loginUser ));
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: '16px' }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default SignIn;