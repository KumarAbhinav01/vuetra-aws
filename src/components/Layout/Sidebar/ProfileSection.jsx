import React, { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import {
  ChevronRight,
  CreditCard,
  Person,
  Settings,
} from "@mui/icons-material";

const style = {
  transition: "all 500ms ease-in-out",
  ":hover": {
    background: "transparent",
    opacity: 0.35,
  },
};

const ProfileSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");
    setAnchorEl(null);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ width: "fit-content", position: "relative" }}
    >
      <Avatar
        src="https://example.com/avatar.jpg"
        alt="J"
        sx={{
          cursor: "pointer",
          width: 30,
          height: 30,
          background: (theme) => theme.palette.color.bg3,
          color: (theme) => theme.palette.color.secondary,
          fontSize: "13px",
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          ".MuiPaper-root": {
            background: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.color.bg3
                : theme.palette.color.bg2,
            zIndex: 9999,
            boxShadow: "none",
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            borderRadius: "12px",
            width: "270px",
            transition: "all 500ms ease-in-out",
            padding: "6px",
          },
          marginLeft: "40px",
        }}
        onMouseLeave={handleMouseLeave}
      >
        <MenuItem
          sx={{
            background: "transparent !important",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              src="https://example.com/avatar.jpg"
              sx={{
                cursor: "pointer",
                width: 30,
                height: 30,
                background: (theme) => theme.palette.color.bg3,
                color: (theme) => theme.palette.color.secondary,
                fontSize: "13px",
              }}
            />
            <Typography
              sx={{
                color: (theme) => theme.palette.color.primary,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {" "}
              Jens Van Der Bjii
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack
            sx={{
              width: "100%",
              borderBottom: (theme) =>
                `1px solid ${theme.palette.color.border}`,
              py: "6px",
            }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontWeight: "500",

                fontSize: "13px",
                span: {
                  color: (theme) => theme.palette.color.secondary,
                },
              }}
            >
              Language: <span>English {"(US)"}</span>
            </Typography>
            <ChevronRight
              sx={{
                color: (theme) => theme.palette.color.primary,
                fontSize: "16px",
              }}
            />
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack
            sx={{
              width: "100%",
              borderBottom: (theme) =>
                `1px solid ${theme.palette.color.border}`,
              pb: "6px",
            }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontWeight: "500",

                fontSize: "13px",
                span: {
                  color: (theme) => theme.palette.color.secondary,
                },
              }}
            >
              Firm: <span>Elevated Funded FX</span>
            </Typography>
            <ChevronRight
              sx={{
                color: (theme) => theme.palette.color.primary,
                fontSize: "16px",
              }}
            />
          </Stack>
        </MenuItem>
        <MenuItem sx={style}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Settings
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.color.secondary,
              }}
            />
            <Typography sx={{ fontSize: "13px" }}>Settings</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={style}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Person
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.color.secondary,
              }}
            />
            <Typography sx={{ fontSize: "13px" }}>Your Account</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={style}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CreditCard
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.color.secondary,
              }}
            />
            <Typography sx={{ fontSize: "13px" }}>Billing</Typography>
          </Stack>
        </MenuItem>
        {/* Settings Your account Billing Vuetra help center Status page Terms and
        policies */}
        <Divider />
        <MenuItem sx={style}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ fontSize: "13px" }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Vuetra help center
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={style}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ fontSize: "13px" }}>Status page</Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={style}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ fontSize: "13px" }}>
              Terms and policies
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileSection;
