import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Loader from "../components/UI/loader";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoader(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoader(false);
    });
  }, []);

  return (
    <>
      {loader && <Loader />}
      <Layout>
        <main className="main">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
