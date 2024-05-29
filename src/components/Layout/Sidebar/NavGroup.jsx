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
        sx={{
          ":hover": { opacity: 0.35 },
          transition: "opacity 0.5s",
        }}
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
          {navItem.children.map((subChild) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                p: 0.8,
                paddingLeft: 4,
                ...(isPathMatching(subChild.path) && {
                  borderLeft: (theme) =>
                    `2px solid ${theme.palette.color.primary}`,
                }),
                ":hover": { opacity: 0.35 },
                transition: "opacity 0.5s",
                cursor: "pointer",
              }}
            >
              {!isPathMatching(subChild.path) && (
                <Box
                  sx={{
                    position: "absolute",
                    width: 10,
                    height: 18,
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
                    borderTop: 0,
                    borderRight: 0,
                    top: "0",
                    left: "12px",
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
                <Typography variant="caption">{subChild.title}</Typography>
              </a>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
