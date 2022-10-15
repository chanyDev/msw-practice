import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    import('../mocks');
  }
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
