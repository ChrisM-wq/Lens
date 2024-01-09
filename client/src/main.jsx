import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@mui/material";
import theme from './themeConfig.js';

import { RouterProvider } from "react-router-dom";
import router from './routes.jsx';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloLink, concat, createHttpLink  } from '@apollo/client';
import getToken from './utils/auth.js';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {

  const accessToken = getToken();
  // Set the access token in the Authorization header
  operation.setContext({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  credentials: 'include',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
