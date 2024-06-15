import ThemeSwitch from "./ThemeSwitch";
import Notifications from "./Notifications";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { getChildNavItem } from "../../../utils/getNavData";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";

export default function Header() {
  const pathname = window.location.pathname;
  const { navItem, childItem } = getChildNavItem(pathname);
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7px 12px",
        color: (theme) => theme.palette.color.primary,
        backgroundColor: (theme) =>
          theme.palette.color[childItem ? "bg" : "bg2"],
        borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
        ...(childItem?.noHeader && { display: "none" }),
        ...(childItem && {
          px: "64px",
        }),
      }}
    >
      {childItem ? (
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {navItem.icon && <navItem.icon size={18} />}
          <Typography variant="h5" sx={{ m: "3", mb: "0" }}>
            {navItem.title}
          </Typography>
        </Box>
      ) : (
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="subtitle1">Good Morning, Jens</Typography>
          <Typography variant="caption_500">June 13, 2024</Typography>
        </Stack>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <SearchSection />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: "21px",
              my: "auto",
              borderRightWidth: "2px",
            }}
          />
          <ThemeSwitch />
          <Notifications />
          <ProfileSection />
        </Box>
      </Box>
    </Box>
  );
}
