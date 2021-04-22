import { ThemeProvider } from "styled-components";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
