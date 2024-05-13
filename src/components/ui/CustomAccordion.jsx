import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ title, children, color = "primary" }) => {
  return (
    <Accordion
      sx={{
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "24px",
        background: "transparent",
        margin: "12px 0 0 0 !important",
        "& .MuiAccordionSummary-root": {
          background: (theme) => theme.palette.color.bg2,
          minHeight: 0,
          borderRadius: "6px",
        },
        "& .Mui-expanded": {
          margin: "0px !important",
          minHeight: "0 !important",
        },
        ":before": { display: "none" },
      }}
      defaultExpanded
    >
      <AccordionSummary
        sx={{
          minHeight: 0,
          "& .MuiAccordionSummary-content": {
            margin: 0,
            lineHeight: "24px",
            padding: "8px 0px",
            color: (theme) => theme.palette.color[color],
          },

          "& span": { color: (theme) => theme.palette.color.secondary },
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "16px",
            }}
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{ m: "0 !important", p: "12px 0px 8px 8px !important" }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
