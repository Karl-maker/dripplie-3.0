import Head from "next/head";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Intro page to quickly explain what Dripplie is then allow them the option to load events close by with a "Look Around" button
 *
 */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dripplie</title>
        <meta
          name="description"
          content="Find events near you and experience the best things there are to see, do and eat. Discover events happening near you. Find out about upcoming events and festivals with Dripplie."
        />
      </Head>
    </div>
  );
}
