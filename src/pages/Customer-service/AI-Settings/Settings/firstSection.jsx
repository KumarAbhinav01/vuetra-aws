import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import FormInput from "../../../../components/ui/FormInput";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FirstSection = () => {
  const theme = useTheme();
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
        <Stack
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <FormInput label="Name" placeholder="Enter Name" spacing="8px" />
          <Stack spacing={1}>
            <Typography variant="heading">Bot Picture</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.color.green,
                  color: "white",
                  fontWeight: "600",
                  fontSize: "28.5px",
                  padding: "10px",
                  width: "50px",
                  height: "50px",
                }}
              >
                J
              </Avatar>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.2),
                  ":hover": {
                    background: (theme) =>
                      alpha(theme.palette.color.secondary, 0.2),
                    boxShadow: "none",
                  },
                  color: (theme) => theme.palette.color.primary,
                  height: "fit-content",
                  boxShadow: "none",
                }}
              >
                Choose
                <VisuallyHiddenInput type="file" />
              </Button>
              <Typography variant="caption_500">
                JPG, GIF or PNG. 1MB Max.
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="heading">Choose bot Color</Typography>
            <Box sx={{ display: "flex", gap: "6px" }}>
              {[
                "blue",
                "cyan",
                "red",
                "orange",
                "pink",
                "darkblue",
                "yellow",
                "red",
                "darkorange",
              ].map((item) => (
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "4px",
                    background: (theme) => theme.palette.color[item],
                  }}
                ></Box>
              ))}
            </Box>
          </Stack>
        </Stack>
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                borderRadius: "12px 12px 0 0",
                gap: "12px",
                background: (theme) => theme.palette.color.blue,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38">
                <path
                  d="M 31.35 15.757 L 31.35 8.678 C 32.307 8.293 32.934 7.365 32.933 6.333 C 32.934 5.661 32.667 5.016 32.192 4.541 C 31.717 4.066 31.072 3.8 30.4 3.8 C 29.728 3.8 29.084 4.067 28.609 4.542 C 28.133 5.017 27.867 5.661 27.867 6.333 C 27.867 7.397 28.522 8.303 29.45 8.678 L 29.45 13.394 C 26.726 10.595 23.052 8.867 19 8.867 C 14.948 8.867 11.275 10.595 8.55 13.395 L 8.55 8.678 C 9.507 8.293 10.133 7.365 10.133 6.333 C 10.133 5.661 9.867 5.017 9.392 4.541 C 8.916 4.066 8.272 3.8 7.6 3.8 C 6.928 3.8 6.284 4.067 5.809 4.542 C 5.334 5.017 5.067 5.661 5.067 6.333 C 5.067 7.397 5.722 8.303 6.65 8.678 L 6.65 15.758 C 4.863 18.457 3.8 21.757 3.8 25.333 C 3.8 30.232 10.606 34.2 19 34.2 C 27.397 34.2 34.2 30.232 34.2 25.333 C 34.2 21.756 33.136 18.457 31.35 15.757 Z M 19 27.866 C 13.751 27.866 9.5 26.732 9.5 25.333 C 9.5 22.364 10.225 19.678 11.4 17.733 C 16.471 19.485 21.909 19.358 26.6 17.733 C 27.775 19.678 28.5 22.365 28.5 25.333 C 28.5 26.732 24.246 27.866 19 27.866 Z"
                  fill={theme.palette.color.bg}
                ></path>
                <path
                  d="M 25.333 23.75 C 25.333 24.626 24.626 25.333 23.75 25.333 C 22.874 25.333 22.166 24.626 22.166 23.75 C 22.166 22.875 22.874 22.166 23.75 22.166 C 24.626 22.166 25.333 22.875 25.333 23.75 Z M 15.833 23.75 C 15.833 24.626 15.125 25.333 14.25 25.333 C 13.375 25.333 12.667 24.626 12.667 23.75 C 12.667 22.875 13.375 22.166 14.25 22.166 C 15.125 22.166 15.833 22.875 15.833 23.75 Z"
                  fill={theme.palette.color.bg}
                ></path>
              </svg>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.color.bg,
                }}
              >
                AI Chat Bot
              </Typography>
            </Box>
            <Stack
              spacing={1}
              sx={{
                height: "230px",
                overflow: "auto",
                padding: "16px",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: "8px",
                    borderRadius: "50%",
                    background: (theme) =>
                      alpha(theme.palette.color.buttonbg, 0.1),
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
                  do eiusmod tempor incididunt ut labore et dolore.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
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

export default FirstSection;
