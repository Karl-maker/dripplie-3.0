import { Stack, Grid, Box } from "@mui/material";
import Head from "next/head";

import Layout from "../components/layout";
import Widget from "../components/widget";
import Post from "../components/widget/post";
import WidgetSkeleton from "../components/widget/skeleton";
import Wrapper from "../components/widget/wrapper";
import { spreadElementsInMatrix } from "../utils/array";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Intro page to quickly explain what Dripplie is then allow them the option to load events close by with a "Look Around" button
 *
 */

export default function Home() {
  /**
   *  sx = 2
   *  sm = 3
   *  md = 4
   *  lg = 5 / 6
   */
  const columns = 2;
  const posts = [
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={192}
      author="James_111"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
    <Post
      height={300}
      author="Karl-Johan Bailey"
      profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
      media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      verified
    />,
  ];

  const lists = spreadElementsInMatrix(columns, posts);

  return (
    <>
      <Head>
        <title>Dripplie</title>
        <meta
          name="description"
          content="Find events near you and experience the best things there are to see, do and eat. Discover events happening near you. Find out about upcoming events and festivals with Dripplie."
        />
      </Head>
      {/* Coloumns To Display On Mobile, x on Desktop */}

      <Grid container sx={{ paddingTop: 1 }} justifyContent="center">
        {Array.from(Array(columns), (e, i) => {
          return (
            <Grid xs={6} sm={4} md={3} lg={2}>
              <Stack
                key={i}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {lists[i].map((post) => (
                  <Box sx={{ padding: 1 }}>{post}</Box>
                ))}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
