import { ThemeProvider } from "styled-components";
import { colors } from "../themes";

import Layout from "../components/layout.component";

import "../styles/globals.css";

const theme = {
  colors,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
