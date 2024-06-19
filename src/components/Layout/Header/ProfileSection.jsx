import * as React from "react";

import {
  Avatar,
  Box,
  Divider,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import TranslateIcon from "@mui/icons-material/Translate";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { ChevronRight, ExpandMore, Settings } from "@mui/icons-material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const items = [
  {
    label: "Theme",
    icon: (
      <ImagesearchRollerIcon
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
    arrow: true,
  },
  {
    label: "Change Language",
    icon: (
      <TranslateIcon
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
    arrow: true,
  },
  {
    label: "Account Settings",
    icon: (
      <Settings
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    divider: true,
  },
  {
    label: "Keyboard Shortcuts",
    icon: (
      <KeyboardCommandKeyIcon
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    label: "What's new",
    icon: (
      <BoltOutlinedIcon
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    label: "Logout",
    icon: (
      <LogoutOutlinedIcon
        sx={{
          color: "inherit",
          fontSize: "16px",
        }}
      />
    ),
  },
];

export default function ProfileSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack
        sx={{
          padding: "9px",
          background: (theme) => "rgb(29, 35, 43)",
          borderRadius: "100px",
          cursor: "pointer",
          display: { xs: "none", lg: "flex" },
        }}
        onClick={handleClick}
        direction="row"
        spacing={0.5}
        alignItems="center"
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Avatar
            src="/images/person.avif"
            sx={{
              //   margin: "8px 0 8px 8px !important",
              cursor: "pointer",
              width: "25px",
              height: "25px",
            }}
            color="inherit"
          />
          <Box
            sx={{
              width: "9px",
              height: "9px",
              background: (theme) => theme.palette.color.cyan,
              borderRadius: "50%",
              position: "absolute",
              right: "0",
              bottom: "0",
            }}
          ></Box>
        </Box>
        <ExpandMore
          fontSize="small"
          sx={{
            transition: "all 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Stack>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: "9px", width: "297px", py: "14px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              padding: "12px",
              background: (theme) => theme.palette.color.gray,
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Avatar
                src="/images/person.avif"
                sx={{
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                }}
                color="inherit"
              />
              <Box
                sx={{
                  width: "9px",
                  height: "9px",
                  background: (theme) => theme.palette.color.cyan,
                  borderRadius: "50%",
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                }}
              ></Box>
            </Box>
            <Stack spacing={0.7}>
              <Typography variant="subtitle1_500" sx={{ fontSize: "15px" }}>
                Jens
              </Typography>
              <Typography variant="caption_500" sx={{ fontSize: "13px" }}>
                Online
              </Typography>
            </Stack>
          </Box>
          <Stack sx={{ mt: "12px" }} spacing={1}>
            {items.map((item, index) =>
              item.divider ? (
                <Box sx={{ p: "8px", width: "100%" }}>
                  <Divider />
                </Box>
              ) : (
                <Box
                  sx={{
                    px: "7px",
                    py: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.5s ease-in-out",
                    color: (theme) => theme.palette.color.secondary,
                    cursor: "pointer",
                    ":hover": {
                      pr: "0px",
                      color: (theme) => theme.palette.color.tertiary,
                    },
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    {item.icon}
                    <Typography variant="caption_500" sx={{ color: "inherit" }}>
                      {item.label}
                    </Typography>
                  </Stack>
                  {item.arrow && (
                    <ChevronRight sx={{ fontSize: "16px", color: "inherit" }} />
                  )}
                </Box>
              )
            )}
          </Stack>
        </Box>
      </Popover>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
    </div>
  );
}
