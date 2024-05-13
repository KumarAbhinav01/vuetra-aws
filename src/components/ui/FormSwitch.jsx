import { Box, FormControl, FormLabel, Stack, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import CustomSwitch from "./Switch";

const FormSwitch = ({ label, label2, helperTexts, sx, flex, ...rest }) => {
  return (
    <FormControl fullWidth>
      <Box
        sx={{
          ...(flex && {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }),
        }}
      >
        {label && (
          <FormLabel
            sx={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {label}
          </FormLabel>
        )}
        {label2 && (
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <Typography variant="caption">{label2}</Typography>
            <HelpIcon sx={{ fontSize: "15px" }} />
          </Stack>
        )}
        <CustomSwitch
          sx={{
            my: "12px",
            ...sx,
          }}
          {...rest}
        />
      </Box>
      {helperTexts && (
        <Stack spacing={2} sx={{ mt: "4px" }}>
          {helperTexts.map((text, index) => (
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.color.secondary,
                fontWeight: "400",
              }}
              key={index}
            >
              {text}
            </Typography>
          ))}
        </Stack>
      )}
    </FormControl>
  );
};

export default FormSwitch;
