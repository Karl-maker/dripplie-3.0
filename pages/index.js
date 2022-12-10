import { Stack, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";

import Layout from "../components/layout";
import { useDispatch } from "react-redux";
import { updateLocation } from "../context/reducers/system";
import RequestLocationPrompt from "../components/location/request-prompt";
import ErrorLocationPrompt from "../components/location/error-prompt";
import Widget from "../components/widget";
import Post from "../components/widget/post";
import WidgetSkeleton from "../components/widget/skeleton";
import Wrapper from "../components/widget/wrapper";
import { spreadElementsInMatrix } from "../utils/array";
import handleGeoLocationPermission from "../utils/location/request-permission";
import getLocationDetails from "../utils/location/details";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Intro page to quickly explain what Dripplie is then allow them the option to load events close by with a "Look Around" button
 *
 */

export default function Home() {
  const [locationIssueMessage, setLocationIssueMessage] = useState(null);
  const [locationPrompt, setLocationPrompt] = useState(true);
  const [posts, setPosts] = useState([]);
  const [columns, setColumns] = useState(2);
  const [sortedPosts, setSortedPosts] = useState(Array(1).fill(Array()));

  const theme = useTheme();

  const xlg = useMediaQuery(theme.breakpoints.up("lg"));
  const lg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const md = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const sm = useMediaQuery(theme.breakpoints.between("sx", "sm"));
  const sx = useMediaQuery(theme.breakpoints.down("sx"));

  /**
   * @desc The amount of columns that page should have based on size
   *
   *  sx = 2
   *  sm = 3
   *  md = 4
   *  lg = 5 / 6
   *
   * @returns {Number}
   */

  function setupColumns() {
    let col = 2;

    if (xlg) {
      col = 5;
    } else if (lg) {
      col = 5;
    } else if (md) {
      col = 4;
    } else if (sm) {
      col = 3;
    } else if (sx) {
      col = 2;
    }

    return col;
  }

  useEffect(() => {
    setPosts([
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
    ]);
  }, []);

  useEffect(() => {
    if (!posts) return;

    const col_num = setupColumns();

    setSortedPosts(spreadElementsInMatrix(col_num, posts));
    setColumns(col_num);
  }, [xlg, lg, md, sm, sx, posts]);

  const dispatch = useDispatch();

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

      <Grid
        container
        sx={{ paddingTop: 1, paddingLeft: 0.5, paddingRight: 0.5 }}
        justifyContent="center"
      >
        {sortedPosts[0].length > 0 ? (
          <>
            {Array.from(Array(columns), (e, i) => {
              return (
                <Grid xs={6} sm={4} md={3} lg={2}>
                  <Stack
                    key={i}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    {sortedPosts[i] && (
                      <>
                        {sortedPosts[i].map((post) => (
                          <Box sx={{ padding: 0.5 }}>{post}</Box>
                        ))}
                      </>
                    )}
                  </Stack>
                </Grid>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Grid>
      {
        // Prompts
      }
      <ErrorLocationPrompt
        open={locationIssueMessage}
        onClose={() => {
          setLocationIssueMessage(false);
        }}
        onClick={() => {
          setLocationIssueMessage(false);
        }}
      />
      <RequestLocationPrompt
        open={locationPrompt}
        onAllow={async () => {
          handleGeoLocationPermission({
            onGranted: async (position) => {
              // Get Details about Location

              await getLocationDetails(
                position.coords.longitude,
                position.coords.latitude
              );

              // Storing Position (With Redux State Manager)
              dispatch(
                updateLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                })
              );
            },
            onError: (error) => {
              setLocationIssueMessage(true);
            },
            onDenied: () => {},
          });

          setLocationPrompt(false);
        }}
      />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
