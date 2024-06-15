import { Box, Typography, alpha } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavGroup({ navItem }) {
  const pathname = window.location.pathname;
  const isPathMatching = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };
  return (
    <Accordion
      defaultExpanded
      disableGutters
      sx={{ background: "transparent" }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "18px",
              minHeight: "0px",
              margin: 0,
            }}
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="subtitle1">{navItem.title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {navItem.children
            .filter((subChild) => !subChild.notVisible)
            .map((subChild) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  p: 0.8,
                  paddingLeft: "16px",
                  borderLeft: `2px solid transparent`,
                  ...(subChild.path === pathname && {
                    borderLeft: (theme) =>
                      `2px solid ${theme.palette.color.active}`,
                    background: (theme) => theme.palette.color.lightgray,
                  }),
                  ":hover": {
                    borderLeft: (theme) =>
                      `2px solid ${theme.palette.color.active}`,
                    background: (theme) => theme.palette.color.lightgray,
                    ".border-box": {
                      opacity: 0,
                    },
                  },
                  transition: "opacity 0.5s",
                  cursor: "pointer",
                  borderRadius: "0px 8px 8px 0px",
                }}
              >
                {!isPathMatching(subChild.path) && (
                  <Box
                    className="border-box"
                    sx={{
                      position: "absolute",
                      width: 10,
                      height: 18,
                      border: (theme) =>
                        `1px solid ${alpha(
                          theme.palette.color.secondary,
                          0.15
                        )}`,
                      borderTop: 0,
                      borderRight: 0,
                      top: "0",
                      left: "0px",
                      ":hover": { opacity: 0 },
                    }}
                  ></Box>
                )}
                {subChild.icon && (
                  <Box
                    sx={{
                      color: (theme) =>
                        theme.palette.color[
                          isPathMatching(subChild.path) ? "blue" : "secondary"
                        ],
                      mr: 1,
                      ml: isPathMatching(subChild.path) ? "-16px" : 0,
                    }}
                  >
                    <subChild.icon size={16} />
                  </Box>
                )}

                <a
                  style={{ textDecoration: "none" }}
                  href={subChild.to ?? subChild.path}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      ...(isPathMatching(subChild.path) && {
                        color: (theme) => theme.palette.color.primary,
                      }),
                    }}
                  >
                    {subChild.title}
                  </Typography>
                </a>
              </Box>
            ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
