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

export default client;