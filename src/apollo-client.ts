// apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Replace with your actual GraphQL endpoint
const httpLink = new HttpLink({
  uri: 'https://api.travelpayouts.com/graphql/v1/query/',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-access-token': 'd88350e04e2a77e90ae1d34d5419369a',
    }
  }
});

// Combine authLink and httpLink
const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

export default client;