import { Box, Button, Stack, Typography, alpha, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FormSelect from "../../../../components/ui/FormSelect1";

const SecondSection = () => {
  const bottomRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Box>
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        sx={{
          padding: "12px",
        }}
      >
        <Box
          sx={{
            padding: "14px",
            paddingBottom: "0px",
            borderRadius: "12px",
            background: (theme) => alpha(theme.palette.color.secondary, 0.05),
            // background: (theme) => theme.palette.color.bg2,
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: (theme) => theme.palette.color.bg,
              border: (theme) => `1px solid ${theme.palette.color.border}`,
            }}
          >
            <Stack
              spacing={1}
              sx={{
                height: "370px",
                overflow: "auto",
                padding: "16px",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    flexGrow: 1,
                    // width: "90%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M 19.8 9.952 L 19.8 5.481 C 20.404 5.238 20.8 4.651 20.8 4 C 20.8 3.575 20.632 3.168 20.332 2.868 C 20.032 2.568 19.624 2.4 19.2 2.4 C 18.776 2.4 18.369 2.568 18.069 2.869 C 17.769 3.169 17.6 3.576 17.6 4 C 17.6 4.672 18.014 5.244 18.6 5.481 L 18.6 8.459 C 16.88 6.691 14.559 5.6 12 5.6 C 9.441 5.6 7.121 6.691 5.4 8.46 L 5.4 5.481 C 6.004 5.237 6.4 4.651 6.4 4 C 6.4 3.575 6.232 3.168 5.932 2.868 C 5.631 2.568 5.224 2.4 4.8 2.4 C 4.376 2.4 3.969 2.568 3.669 2.869 C 3.369 3.169 3.2 3.576 3.2 4 C 3.2 4.672 3.614 5.244 4.2 5.481 L 4.2 9.952 C 3.072 11.657 2.4 13.741 2.4 16 C 2.4 19.094 6.698 21.6 12 21.6 C 17.303 21.6 21.6 19.094 21.6 16 C 21.6 13.74 20.928 11.657 19.8 9.952 Z M 12 17.6 C 8.685 17.6 6 16.884 6 16 C 6 14.125 6.458 12.428 7.2 11.2 C 10.403 12.306 13.837 12.226 16.8 11.2 C 17.542 12.428 18 14.125 18 16 C 18 16.884 15.313 17.6 12 17.6 Z"
                      fill={theme.palette.color.buttonbg}
                    ></path>
                    <path
                      d="M 16 15 C 16 15.553 15.553 16 15 16 C 14.447 16 14 15.553 14 15 C 14 14.447 14.447 14 15 14 C 15.553 14 16 14.447 16 15 Z M 10 15 C 10 15.553 9.553 16 9 16 C 8.447 16 8 15.553 8 15 C 8 14.447 8.447 14 9 14 C 9.553 14 10 14.447 10 15 Z"
                      fill={theme.palette.color.buttonbg}
                    ></path>
                  </svg>
                </Box>
                <Typography
                  variant="caption_500"
                  sx={{
                    lineHeight: "18.9px",
                    borderLeft: (theme) =>
                      `1px solid ${theme.palette.color.blue}`,
                    padding: "12px",
                    borderRadius: "12px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum
                  dolor sit amet, consectetur adipiscing
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M 19.8 9.952 L 19.8 5.481 C 20.404 5.238 20.8 4.651 20.8 4 C 20.8 3.575 20.632 3.168 20.332 2.868 C 20.032 2.568 19.624 2.4 19.2 2.4 C 18.776 2.4 18.369 2.568 18.069 2.869 C 17.769 3.169 17.6 3.576 17.6 4 C 17.6 4.672 18.014 5.244 18.6 5.481 L 18.6 8.459 C 16.88 6.691 14.559 5.6 12 5.6 C 9.441 5.6 7.121 6.691 5.4 8.46 L 5.4 5.481 C 6.004 5.237 6.4 4.651 6.4 4 C 6.4 3.575 6.232 3.168 5.932 2.868 C 5.631 2.568 5.224 2.4 4.8 2.4 C 4.376 2.4 3.969 2.568 3.669 2.869 C 3.369 3.169 3.2 3.576 3.2 4 C 3.2 4.672 3.614 5.244 4.2 5.481 L 4.2 9.952 C 3.072 11.657 2.4 13.741 2.4 16 C 2.4 19.094 6.698 21.6 12 21.6 C 17.303 21.6 21.6 19.094 21.6 16 C 21.6 13.74 20.928 11.657 19.8 9.952 Z M 12 17.6 C 8.685 17.6 6 16.884 6 16 C 6 14.125 6.458 12.428 7.2 11.2 C 10.403 12.306 13.837 12.226 16.8 11.2 C 17.542 12.428 18 14.125 18 16 C 18 16.884 15.313 17.6 12 17.6 Z"
                      fill="rgb(46, 62, 97)"
                    ></path>
                    <path
                      d="M 16 15 C 16 15.553 15.553 16 15 16 C 14.447 16 14 15.553 14 15 C 14 14.447 14.447 14 15 14 C 15.553 14 16 14.447 16 15 Z M 10 15 C 10 15.553 9.553 16 9 16 C 8.447 16 8 15.553 8 15 C 8 14.447 8.447 14 9 14 C 9.553 14 10 14.447 10 15 Z"
                      fill="rgb(0,0,0)"
                    ></path>
                  </svg>
                </Box>
                <Typography
                  variant="caption_500"
                  sx={{
                    lineHeight: "18.9px",
                    borderLeft: (theme) =>
                      `1px solid ${theme.palette.color.blue}`,
                    padding: "12px",
                    borderRadius: "12px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </Typography>
              </Stack>
              <Typography
                variant="caption_500"
                sx={{
                  textAlign: "center",
                }}
              >
                Customer asked a question
              </Typography>
              <Box
                sx={{
                  alignSelf: "self-end",
                }}
              >
                <FormSelect
                  options={[
                    { value: "thathelped", label: "That Helped👍" },
                    { value: "didnot", label: "Did Not Help👎" },
                    { value: "irrelevant", label: "Irrelevant🤷‍♂️" },
                  ]}
                  defaultValue="thathelped"
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                  }}
                />
              </Box>
              <Box
                sx={{
                  alignSelf: "self-end",
                }}
              >
                <FormSelect
                  options={[
                    {
                      value: "talktothatperson",
                      label: "Talk to that person👦",
                    },
                    {
                      value: "talktoanotherperson",
                      label: "Talk to another person👦",
                    },
                    { value: "talktohuman", label: "Talk to human👦" },
                  ]}
                  defaultValue="talktothatperson"
                />
              </Box>
              <div ref={bottomRef} />
            </Stack>
          </Box>
        </Box>
        <Stack
          spacing={6}
          sx={{
            width: "100%",
          }}
        >
          <Stack spacing={3} sx={{ position: "relative" }}>
            <Typography variant="heading">Choose the phrase here…</Typography>
            <Typography
              variant="caption_500"
              sx={{
                lineHeight: "18.9px",
              }}
            >
              Select the ideal option for your audience. It won’t alter the
              button's functionality.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: "-40px",
                left: "-70px",
                rotate: "160deg",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="45">
                <path
                  d="M 1.907 20.547 C 6.929 15.072 11.664 9.388 18.387 5.988 C 20.436 4.952 27.218 1.08 29.6 2.4 C 36.097 5.998 26.126 23.053 24.646 27.098 C 20.84 37.498 22.065 45.62 35.337 42.385 C 49.654 38.896 67.032 30.545 78.78 21.535 C 81.889 19.151 90.219 15.867 82.431 15.867 C 79.635 15.867 67.865 15.618 76.955 16.751 C 77.765 16.852 86.916 16.587 86.916 17.011 C 86.916 18.038 82.795 21.919 82.171 23.302 C 81.089 25.699 79.823 27.202 79.823 29.906"
                  fill="transparent"
                  stroke-width="1.27"
                  stroke={theme.palette.color.buttonbg}
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </Box>
          </Stack>
          <Typography variant="caption_500">
            Resolve the conversation
          </Typography>
          <Typography variant="caption_500">
            Routes the customer to teammates
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        sx={{
          p: "12px",
          background: (theme) => alpha(theme.palette.color.secondary, 0.03),
          borderTop: (theme) => `1px solid ${theme.palette.color.border}`,
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: (theme) => alpha(theme.palette.color.secondary, 0.15),
            color: (theme) => theme.palette.color.primary,
            boxShadow: "none",
            ":hover": {
              background: (theme) => alpha(theme.palette.color.secondary, 0.15),
              boxShadow: "none",
            },
            borderRadius: "8px",
          }}
        >
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Box>
  );
};

export default SecondSection;
