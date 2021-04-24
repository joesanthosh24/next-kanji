import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { colors, fonts } from "../themes";

import Layout from "../components/layout.component";

import "../styles/globals.css";

const theme = {
  colors,
  fonts,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kanji App</title>
        <link rel="icon" href="/images/fire-kanji.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
