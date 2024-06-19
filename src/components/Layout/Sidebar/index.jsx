import React from "react";
import { Box, Tooltip } from "@mui/material";

import { BiLogoDeviantart } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import Chat from "./Chat";
import ProfileSection from "./ProfileSection";
import { navItems, navItems2 } from "../../../static/navItems";
import { getChildNavItem } from "../../../utils/getNavData";

export default function SideBar() {
  const pathname = window.location.pathname;
  const isPathMatching = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  // const navItem = navItems.find((item) => isPathMatching(item.path));
  const { navItem: parentItem, childItem } = getChildNavItem(pathname);

  const [navItem, setNavItem] = React.useState(
    childItem?.children ? childItem : parentItem
  );

  console.log(navItem, parentItem, childItem);

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "start",
        flexGrow: "0",
        flexShrink: "0",
        flexDirection: "row",
        gap: "0",
        minHeight: "100vh",
        overflow: "visible",
        p: "0",
        position: "relative",
        width: "min-content",
        // borderRight: (theme) => `2px solid ${theme.palette.color.border}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
          alignSelf: "stretch",
          flexGrow: "0",
          flexShrink: "0",
          p: "0",
          height: "auto",
          overflow: "visible",
          width: "min-content",
          color: (theme) => theme.palette.color.secondary,
          backgroundColor: (theme) => theme.palette.color.bg2,
          pb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "0",
          }}
        >
          <Box sx={{ py: "12px" }}>
            <BiLogoDeviantart size={21} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              gap: "1",
              backgroundColor: (theme) => theme.palette.color.bg2,
            }}
          >
            {navItems.map((item) => {
              const isActive = isPathMatching(item.path);
              return (
                <Tooltip
                  key={item.title}
                  title={item.tooltip}
                  placement="right"
                >
                  <a href={item.to || item.path}>
                    <Box
                      sx={{
                        display: "flex",

                        color: (theme) => theme.palette.color.secondary,
                        p: "12px",
                        ...(isActive && {
                          backgroundColor: (theme) => theme.palette.color.bg2,
                          borderLeft: (theme) =>
                            `2px solid ${theme.palette.color.active}`,
                          color: (theme) => theme.palette.color.primary,
                        }),
                      }}
                    >
                      <item.icon size={18} />
                    </Box>
                  </a>
                </Tooltip>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: "0",
              flexShrink: "0",
              overflow: "visible",
              position: "relative",
            }}
          >
            <Box sx={{ p: "12px" }}>
              <FaArrowRightLong size={18} />
            </Box>
            {navItems2.map((item) => {
              const isActive = isPathMatching(item.path);
              return (
                <Tooltip
                  key={item.title}
                  title={item.tooltip}
                  placement="right"
                >
                  <a href={item.to || item.path}>
                    <Box
                      sx={{
                        display: "flex",

                        color: (theme) => theme.palette.color.secondary,
                        p: "12px",
                        ...(isActive && {
                          backgroundColor: (theme) => theme.palette.color.bg2,
                          borderLeft: (theme) =>
                            `2px solid ${theme.palette.color.primary}`,
                          color: (theme) => theme.palette.color.primary,
                        }),
                      }}
                    >
                      <item.icon size={18} />
                    </Box>
                  </a>
                </Tooltip>
              );
            })}
            <Chat />
          </Box>
          <ProfileSection />
        </Box>
      </Box>
      {/* {navItem?.children && !childItem?.noSidebar && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "full",
            minHeight: "100vh",
            gap: "2",
            py: 2,
            color: (theme) => theme.palette.darktext2,
            backgroundColor: (theme) => theme.palette.color,
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            width: "268px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {navItem.title !== parentItem.title && (
                  <ChevronLeft
                    sx={{
                      color: (theme) => theme.palette.color.secondary,
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={() => setNavItem(parentItem)}
                  />
                )}
                <Typography variant="h5" sx={{ m: "3", mb: "0" }}>
                  {navItem?.title}
                </Typography>
              </Box>
              <Search
                sx={{
                  color: (theme) => theme.palette.color.secondary,
                  fontSize: "17px",
                }}
              />
            </Box>
            <Divider sx={{ my: 2 }} />
            <div>
              {navItem?.children
                // .filter((child) => child.children)
                .map((child) =>
                  child.children ? (
                    <NavGroup key={child.title} navItem={child} />
                  ) : (
                    <Box
                      key={child.title}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: 1.5,
                        px: 1.5,
                        gap: 1,
                        ...(child.path === pathname && {
                          borderLeft: (theme) =>
                            `2px solid ${theme.palette.color.primary}`,
                        }),
                        color: (theme) => theme.palette.color.secondary,
                        ":hover": { opacity: 0.35 },
                        transition: "opacity 0.5s",
                        cursor: "pointer",
                      }}
                    >
                      {child.icon && <child.icon size={14} />}
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        {!child.icon && (
                          <Box
                            sx={{
                              width: 10,
                              height: 18,
                              border: (theme) =>
                                `1px solid ${alpha(
                                  theme.palette.color.secondary,
                                  0.15
                                )}`,
                              borderTop: 0,
                              borderRight: 0,
                              mr: "10px",
                              ...(child.path === pathname && { opacity: 0 }),
                            }}
                          ></Box>
                        )}

                        <a
                          href={child.path}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                          }}
                        >
                          <Typography variant="caption" sx={{ py: "5px" }}>
                            {child.title}
                          </Typography>
                        </a>
                      </Box>
                    </Box>
                  )
                )}
            </div>
          </Box>
          <Stack>
            {navItem.children2 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2",
                  p: "16px",
                }}
              >
                {parentItem.children2.map((child) => (
                  <Box
                    key={child.title}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: (theme) => theme.palette.color.primary,
                      ":hover": { opacity: 0.35 },
                      transition: "opacity 0.5s",
                      cursor: "pointer",
                    }}
                  >
                    {child.icon && <child.icon size={15} />}
                    <a
                      style={{ textDecoration: "none" }}
                      href={child.to ?? child.path}
                    >
                      <Typography variant="caption">{child.title}</Typography>
                    </a>
                  </Box>
                ))}
              </Box>
            )}
            {childItem?.button && (
              <Button
                variant="contained"
                sx={{
                  mx: 2,
                  fontSize: "13px",
                  background: (theme) => theme.palette.color.buttonbg,
                  color: (theme) => theme.palette.color.button,
                  ":hover": {
                    background: (theme) => theme.palette.color.buttonbg,
                    color: (theme) => theme.palette.color.button,
                  },
                }}
                onClick={() => dispatch(toggleOpen())}
              >
                <BiPlus
                  size={18}
                  sx={{ color: (theme) => theme.palette.lightText }}
                />
                {childItem.button}
              </Button>
            )}
          </Stack>
        </Box>
      )} */}
    </Box>
  );
}
