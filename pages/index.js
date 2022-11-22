import { Box } from "@mui/material";
import Head from "next/head";

import Layout from "../components/layout";
import Widget from "../components/widget";
import Post from "../components/widget/post";
import WidgetSkeleton from "../components/widget/skeleton";
import Wrapper from "../components/widget/wrapper";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Intro page to quickly explain what Dripplie is then allow them the option to load events close by with a "Look Around" button
 *
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Dripplie</title>
        <meta
          name="description"
          content="Find events near you and experience the best things there are to see, do and eat. Discover events happening near you. Find out about upcoming events and festivals with Dripplie."
        />
      </Head>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
