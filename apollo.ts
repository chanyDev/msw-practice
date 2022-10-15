import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: 'https://graphql.anilist.co',
  fetch: (...args) => fetch(...args),
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
