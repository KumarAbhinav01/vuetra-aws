import { Done } from "@mui/icons-material";
import { Box, Stack, Typography, alpha } from "@mui/material";
import React from "react";

const CustomCheckbox = ({
  variant = "outlined",
  label,
  checked,
  onChange,
  spacing = 2,
  textVariant,
  background = "bg3",
}) => {
  return (
    <Stack direction="row" spacing={spacing} alignItems="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          height: "20px",
          borderRadius: "6px",
          ...(variant === "contained" &&
            !checked && {
              border: (theme) =>
                theme.palette.mode === "dark"
                  ? "transparent"
                  : "2px solid #d4d4d8",
            }),
          ...(variant === "outlined" && {
            border: (theme) =>
              theme.palette.mode === "dark"
                ? "transparent"
                : "2px solid #d4d4d8",
          }),
          cursor: "pointer",
          transition: "all 0.3s",

          ...(checked && {
            ...(variant === "contained" && {
              background: (theme) => theme.palette.color.green,
            }),
            ...(variant === "outlined" && {
              border: (theme) => `2px solid ${theme.palette.color.green}`,
              background: (theme) => alpha(theme.palette.color.green, 0.15),
            }),
          }),
          ...(!checked && {
            background: (theme) => theme.palette.color[background],
            "&:hover": {
              border: (theme) =>
                theme.palette.mode === "dark"
                  ? `2px solid ${theme.palette.color.darkgreen}`
                  : "2px solid #d4d4d8",
            },
          }),
        }}
        onClick={() => onChange && onChange()}
      >
        <Done
          sx={{
            ...(variant === "contained" && {
              color: (theme) => theme.palette.color.bg,
            }),
            ...(variant === "outlined" && {
              color: (theme) => theme.palette.color.green,
            }),
            opacity: 0,
            transition: "all 0.3s",
            ...(checked && {
              opacity: 1,
            }),
            fontSize: "14px",
          }}
        />
      </Box>
      <Typography
        variant={textVariant || "subtitle1_500"}
        sx={{ cursor: "pointer" }}
        onClick={() => onChange && onChange()}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default CustomCheckbox;
