/* eslint-disable @next/next/no-page-custom-font */
import store from '@/redux/store';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </SessionProvider>
    </>
  );
}
