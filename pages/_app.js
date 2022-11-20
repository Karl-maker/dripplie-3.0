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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
