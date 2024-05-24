import { Done } from "@mui/icons-material";
import { Box, Stack, Typography, alpha } from "@mui/material";
import React from "react";

const CustomCheckbox = ({ variant, label, checked, onChange, spacing = 2 }) => {
  console.log("checked", checked);
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
          border: "2px solid #d4d4d8",
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: (theme) =>
              alpha(theme.palette.color.secondary, 0.15),
          },
          ...(checked && {
            border: (theme) => `2px solid ${theme.palette.color.green}`,
            background: (theme) => alpha(theme.palette.color.green, 0.15),
          }),
        }}
        onClick={() => onChange && onChange()}
      >
        <Done
          sx={{
            color: (theme) => theme.palette.color.green,
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
        variant={variant || "subtitle1_500"}
        sx={{ cursor: "pointer" }}
        onClick={() => onChange && onChange()}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default CustomCheckbox;
