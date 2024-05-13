import ThemeSwitch from "./ThemeSwitch";
import Notifications from "./Notifications";
import { BiChevronLeft, BiChevronRight, BiCommand } from "react-icons/bi";
import { Box, Tooltip, Typography, styled } from "@mui/material";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { getChildNavItem } from "../../../utils/getNavData";
import { BsSquareHalf } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const StyledInput = styled("input")({
  border: 0,
  outline: "none",
  backgroundColor: "transparent",
  color: "inherit",
  fontSize: "14px",
  fontWeight: 500,
  "&::placeholder": {
    color: "inherit",
    fontSize: "12px",
    fontWeight: 600,
  },
});

export default function Header() {
  const pathname = window.location.pathname;
  const { id } = useParams();
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
                  {id || nestedChildItem.title}
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
            <Tooltip title="Edit Dashboard">
              <Box>
                <HiOutlineSquaresPlus style={{ cursor: "pointer" }} size={20} />
              </Box>
            </Tooltip>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                border: (theme) => `1px solid ${theme.palette.color.border}`,
                borderRadius: "5px",
                background: "transparent",
                fontSize: "11px",
                py: 0.7,
                px: 2,
                fontWeight: "600",
              }}
            >
              <StyledInput placeholder="Type a command or search ..." />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#8A96A626",
                  borderRadius: "5px",
                  fontSize: "11px",
                  px: 1,
                  py: 0.5,
                  height: "fit-content",
                }}
              >
                <BiCommand size={12} />
                <Typography sx={{ fontSize: "11px" }}>K</Typography>
                {/* <p>K</p> */}
              </Box>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ThemeSwitch />
          <Notifications />
        </Box>
      </Box>
    </Box>
  );
}
