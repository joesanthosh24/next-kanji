import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../redux/store";

import { colors, fonts } from "../themes";

import Layout from "../components/layout.component";

import "../styles/globals.css";

const theme = {
  colors,
  fonts,
};

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>Kanji App</title>
          <link rel="icon" href="/images/fire-kanji.svg" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
