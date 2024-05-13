import {
  FormControl,
  FormLabel,
  Input,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import CustomSwitch from "./Switch";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    // borderRadius: 4,
    // backgroundColor: theme.palette.color.bg2,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "inherit",
    padding: "11px",
    color:
      theme.palette.mode === "dark"
        ? theme.palette.color.secondary
        : theme.palette.color.primary,
    border: (theme) => `1px solid ${theme.palette.color.inputborder}`,
  },
  borderRadius: "7px",
  // background: theme.palette.color.bg2,
}));

const FormInput = ({ label, label2, helperTexts, sx, checkbox, ...rest }) => {
  return (
    <FormControl fullWidth>
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
          justifyContent={"space-between"}
          sx={{ mb: "12px" }}
        >
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
          {checkbox && <CustomSwitch />}
        </Stack>
      )}
      <StyledInput
        sx={{
          border: (theme) => `1px solid ${theme.palette.color.inputborder}`,
          transition: "all 300ms ease-in-out",
          ":focus-within": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.5)}`,
          },
          fontSize: "14px",
          background: (theme) => theme.palette.color.bg2,
          ...sx,
        }}
        placeholder="Enter "
        {...rest}
      />
      {helperTexts && (
        <Stack spacing={2} sx={{ mt: "14px" }}>
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

export default FormInput;
