/**
 *
 * @author Karl-Johan Bailey
 * @company Dripplie.com
 * @created 18/11/2022
 * @version 3.0
 *
 */

import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";
import store from "../context/store";

import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  /**
   * @desc Uses layout at page level if avaliable
   * @see https://nextjs.org/docs/basic-features/layouts
   **/
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
