import Layout from "../src/components/layout/layout";
import { GlobalStyle } from "../src/commons/styles/globals";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
