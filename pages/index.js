import { Stack, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useEffect, useState, useReducer } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout";
import { useDispatch } from "react-redux";
import { updateLocation } from "../context/reducers/system";
import RequestLocationPrompt from "../components/location/request-prompt";
import ErrorLocationPrompt from "../components/location/error-prompt";
import Widget from "../components/widget";
import Post from "../components/widget/post";
import Wrapper from "../components/widget/wrapper";
import { spreadElementsInMatrix } from "../utils/array";
import handleGeoLocationPermission from "../utils/location/request-permission";
import getLocationDetails from "../utils/location/details";
import postMachine from "../machines/posts";
import loadWidgets from "../components/widget/skeletons";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Intro page to quickly explain what Dripplie is then allow them the option to load events close by with a "Look Around" button
 *
 */

export default function Home() {
  const dispatch = useDispatch();
  const system = useSelector((state) => state.system);

  const [postState, postDispatch] = useReducer(
    postMachine.reducer,
    postMachine.initial
  );

  const [locationIssueMessage, setLocationIssueMessage] = useState(null);
  const [locationPrompt, setLocationPrompt] = useState(true);
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
   * @returns { Number }
   */

  function setupColumns() {
    let col = 2;

    if (xlg) {
      col = 6;
    } else if (lg) {
      col = 4;
    } else if (md) {
      col = 3;
    } else if (sm) {
      col = 3;
    } else if (sx) {
      col = 2;
    }

    return col;
  }

  useEffect(() => {
    if (system.location.pending) return;

    postDispatch({ type: postMachine.actions.FETCH });
    async function getPosts() {
      return {
        posts: [
          <Post
            height={200}
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
            height={400}
            author="Karl-Johan Bailey"
            profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
            media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            verified
          />,
          <Post
            height={310}
            author="Karl-Johan Bailey"
            profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
            media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            verified
          />,
          <Post
            height={150}
            author="James_111"
            profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
            media={{ url: `https://picsum.photos/${200 * 2}/${180 * 2}` }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />,
          <Post
            height={310}
            author="Karl-Johan Bailey"
            profile_img={`https://picsum.photos/${200 * 2}/${200 * 2}`}
            media={{ url: `https://picsum.photos/${200 * 2}/${300 * 2}` }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            verified
          />,
          <Post
            height={200}
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
        ],
        message: "",
      };
    }

    getPosts()
      .then((results) => {
        postDispatch({
          type: postMachine.actions.SUCCESS,
          posts: results.posts,
          message: results.message,
        });
      })
      .catch((err) => {
        postDispatch({
          type: postMachine.actions.ERROR,
          error: err,
          message: "Cannot Get Posts",
        });
      });
  }, [system.location.pending]);

  useEffect(() => {
    const col_num = setupColumns();
    setColumns(col_num);

    if (!postState.posts) return;
    setSortedPosts(spreadElementsInMatrix(col_num, postState.posts));
  }, [xlg, lg, md, sm, sx, postState.posts]);

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
        {postState.loading ? (
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
                    {loadWidgets[i].map((post) => (
                      <Box sx={{ padding: 1, width: "100%" }}>{post}</Box>
                    ))}
                  </Stack>
                </Grid>
              );
            })}
          </>
        ) : (
          <>
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
                              <Box sx={{ padding: 1 }}>{post}</Box>
                            ))}
                          </>
                        )}
                      </Stack>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <Box
                sx={{
                  height: "90vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {postState.message}
              </Box>
            )}
          </>
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
