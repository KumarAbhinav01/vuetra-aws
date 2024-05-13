import { Box, Stack, Typography, alpha } from "@mui/material";
import React from "react";

const ProgressBar = ({ steps, page }) => {
  return (
    <Box sx={{ display: "flex", width: "100%", py: "18px", px: "10px" }}>
      {steps.map((step, index) => (
        <Stack alignItems="center" sx={{ width: "100%" }} spacing={3}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1px",
                transition: "all 500ms ease-in-out",
                background: (theme) =>
                  index === 0
                    ? `linear-gradient(-90deg, ${
                        theme.palette.color.green
                      } 0%, ${alpha(theme.palette.color.green, 0)} 100%)`
                    : index <= page
                    ? theme.palette.color.green
                    : theme.palette.color.secondary,
              }}
            />
            <Typography
              sx={{
                color: (theme) =>
                  index <= page
                    ? theme.palette.color.darkText
                    : theme.palette.color.secondary,
                fontSize: "14px",
                lineHeight: "22px",
                borderRadius: "50%",
                transition: "all 500ms ease-in-out",
                background: (theme) =>
                  index <= page ? theme.palette.color.green : "transparent",
                width: "58px",
                textAlign: "center",
              }}
            >
              {index + 1}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                transition: "all 500ms ease-in-out",
                background: (theme) =>
                  index === steps.length - 1
                    ? "transparent"
                    : index < page
                    ? theme.palette.color.green
                    : theme.palette.color.secondary,
              }}
            />
          </Stack>
          <Typography
            sx={{
              fontSize: "13px",
              transition: "all 500ms ease-in-out",
              color: (theme) =>
                index < page
                  ? theme.palette.color.green
                  : index === page
                  ? theme.palette.color.primary
                  : theme.palette.color.secondary,
            }}
          >
            {step}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ProgressBar;
