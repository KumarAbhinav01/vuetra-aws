import React from "react";
import { Box, Button, Stack, Typography, alpha } from "@mui/material";

import NavGroup from "./NavGroup";
import { BiPlus } from "react-icons/bi";
import { ChevronRight } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../slices/openModalSlice";
import { getChildNavItem } from "../../../utils/getNavData";

export default function SideBar1() {
  const dispatch = useDispatch();
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
        backgroundColor: (theme) => theme.palette.color.bg2,
      }}
    >
      {navItem?.children && !childItem?.noSidebar && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "full",
            minHeight: "100vh",

            py: 2,
            color: (theme) => theme.palette.darktext2,
            backgroundColor: (theme) => theme.palette.color,
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            width: "275px",
          }}
        >
          <Box
            sx={{
              gap: "12px",
              display: "flex",
              flexDirection: "column",
            }}
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
              <Typography variant="body3">{parentItem.title}</Typography>
              <ChevronRight
                sx={{
                  fontSize: "16px",
                  color: (theme) => theme.palette.color.secondary,
                }}
              />
              <Typography variant="body1">{childItem.title}</Typography>
            </Stack>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2" }}>
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
      )}
    </Box>
  );
}
