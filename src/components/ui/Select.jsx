import { Done } from "@mui/icons-material";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CustomSelect = ({ label, options, value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div>
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          background: "transparent",
          color: (theme) => theme.palette.color.secondary,
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          ":hover": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.45)}`,
            background: "transparent",
          },
          fontSize: "11.5px",
          //   height: "80%",
          padding: "6.4px 11.8px",
        }}
      >
        {label} <BiChevronDown size={18} style={{ marginLeft: "4px" }} />+
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{
          "& .MuiMenu-paper": {
            background: (theme) => theme.palette.color.bg2,
            borderRadius: "10px",
            marginTop: "5px",
            minWidth: "150px",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            onClick={() => onChange(option.value)}
            sx={{
              ...(option.value === value && {
                background: (theme) => theme.palette.color.bgblue,
              }),
              padding: "8px 16px",
              ":hover": {
                background: "transparent",
                ...(option.value === value && {
                  background: (theme) => theme.palette.color.bgblue,
                }),
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                width: "100%",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {option.icon && (
                  <Box
                    sx={{
                      color: (theme) => theme.palette.color.secondary,
                      ...(option.value === value && {
                        color: (theme) => theme.palette.color.primary,
                      }),
                      height: "fit-content",
                      padding: 0,
                      margin: 0,
                      lineHeight: 0,
                    }}
                  >
                    {option.icon}
                  </Box>
                )}
                <Typography
                  sx={{
                    fontSize: "11.5px",
                    color: (theme) => theme.palette.color.primary,
                    fontWeight: "400",
                  }}
                >
                  {option.label}
                </Typography>
              </Stack>
              <Done
                sx={{
                  color: "#6666FF",
                  display: option.value === value ? "block" : "none",
                  fontSize: "16px",
                }}
              />
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomSelect;
