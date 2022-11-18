/**
 *
 * @author Karl-Johan Bailey
 * @company Dripplie.com
 * @created 18/11/2022
 * @version 3.0
 *
 */

import Head from "next/head";
import Theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
