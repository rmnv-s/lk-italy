import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Loader from '../components/UI/loader';
import { useRouter } from 'next/router';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoader(true);
    });

    router.events.on('routeChangeComplete', () => {
      setLoader(false);
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      {loader && <Loader />}
      <Layout>
        <main className='main'>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
