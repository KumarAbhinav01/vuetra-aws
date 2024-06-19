import ThemeSwitch from "./ThemeSwitch";
import Notifications from "./Notifications";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { getChildNavItem } from "../../../utils/getNavData";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";
import Menu from "./Menu";
import { ChevronRight } from "@mui/icons-material";

export default function Header() {
  const pathname = window.location.pathname;
  const { navItem, childItem } = getChildNavItem(pathname);
  return (
    <Box>
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
            px: { xs: "12px", lg: "64px" },
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
          <Stack
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "flex-start", lg: "center" },
              gap: { xs: 1, lg: 2 },
            }}
          >
            <Typography variant="subtitle1">Good Morning, Jens</Typography>
            <Typography variant="caption_500">June 13, 2024</Typography>
          </Stack>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, lg: 2 },
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
            <Menu />
          </Box>
        </Box>
      </Box>

      {childItem && (
        <Stack
          spacing={1}
          sx={{ my: "10px", display: { xs: "flex", lg: "none" } }}
        >
          <Stack
            direction="row"
            spacing={0.4}
            alignItems="center"
            sx={{ pl: "12px" }}
          >
            <Typography variant="body3">Home</Typography>
            <ChevronRight
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.color.secondary,
              }}
            />
            <Typography variant="body3">{navItem.title}</Typography>
            <ChevronRight
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.color.secondary,
              }}
            />
            <Typography variant="body1">{childItem.title}</Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
