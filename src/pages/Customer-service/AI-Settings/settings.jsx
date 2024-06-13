import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import FirstSection from "./Settings/firstSection";
import ThirdSection from "./Settings/thirdSection";
import FourthSection from "./Settings/fourthSection";
import SecondSection from "./Settings/secondSection";

const items = [
  {
    title: "Choose Identity for your bots",
    children: <FirstSection />,
  },
  {
    title: "Customize Reply Button",
    children: <SecondSection />,
  },
  {
    title: "Trun on the bot Inbox",
    children: <ThirdSection />,
  },
  {
    title: "Auto-close abandoned workflow conversation",
    children: <FourthSection />,
  },
];

const AISettings = () => {
  const [accordion, setAccordion] = React.useState([0]);
  return (
    <Paper sx={{ p: "24px" }}>
      <Stack spacing={2}>
        {items.map((item, index) => (
          <Box
            sx={{
              borderRadius: "6px",
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === "dark"
                    ? theme.palette.color.border
                    : "#e8e8e8"
                }`,
              ...(accordion.includes(index) && {
                border: (theme) => `2px solid ${theme.palette.color.blue}`,
              }),
              overflow: "hidden",
            }}
          >
            <Accordion
              onChange={() => {
                if (accordion.includes(index)) {
                  setAccordion(accordion.filter((i) => i !== index));
                } else {
                  setAccordion([...accordion, index]);
                }
              }}
              expanded={accordion.includes(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: (theme) => theme.palette.color.primary,
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0px",
                }}
              >
                {item.children}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default AISettings;
