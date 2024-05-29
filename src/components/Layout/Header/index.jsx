import ThemeSwitch from "./ThemeSwitch";
import Notifications from "./Notifications";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Box, Typography } from "@mui/material";
import { getChildNavItem } from "../../../utils/getNavData";
import { BsSquareHalf } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Editdashboard from "./Editdashboard";
import SearchSection from "./SearchSection";

export default function Header() {
  const pathname = window.location.pathname;
  const { id } = useParams();
  const paths = pathname.split("/");
  const { navItem, childItem, nestedChildItem } = getChildNavItem(pathname);
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 1.5,
        color: (theme) => theme.palette.color.primary,
        backgroundColor: (theme) => theme.palette.color.bg2,
        borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
        ...(childItem?.noHeader && { display: "none" }),
      }}
    >
      {childItem ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <BiChevronLeft size={15} />
            <Typography variant="subtitle2">Back</Typography>
          </Box>
          {(!childItem.nested || childItem.heading || childItem.title) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 1,
                color: (theme) => theme.palette.color.secondary,
              }}
            >
              <BsSquareHalf size={12} />
              <Typography variant="h5">
                {nestedChildItem?.title || childItem.heading || childItem.title}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1,
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: (theme) => theme.palette.color.secondary }}
            >
              {navItem.title}
            </Typography>
            <BiChevronRight size={17} />
            <Link to={childItem.path} style={{ textDecoration: "none" }}>
              <Typography variant="subtitle1">{childItem.title}</Typography>
            </Link>
            {(childItem.nested || nestedChildItem) && (
              <BiChevronRight size={17} />
            )}
            {(childItem.nested || nestedChildItem) && (
              <Link
                to={childItem.path + "/" + id}
                style={{ textDecoration: "none" }}
              >
                <Typography variant="subtitle1">
                  {id || nestedChildItem?.title || paths[paths.length - 1]}
                </Typography>
              </Link>
            )}
          </Box>
        </Box>
      ) : (
        <Typography variant="h5">Good Morning, Jens</Typography>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {!childItem && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <Editdashboard />
            <SearchSection />
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ThemeSwitch />
          <Notifications />
        </Box>
      </Box>
    </Box>
  );
}
