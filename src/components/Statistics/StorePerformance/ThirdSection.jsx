import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";

import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import { FiArrowUpRight } from "react-icons/fi";
import InfoBox from "../../ui/InfoBox";

const ThirdSection = () => {
  return (
    <>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: "24px",
            width: "100%",
            height: "140px",
            borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
            borderRight: (theme) => `1px solid ${theme.palette.color.border}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",

              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Return on payout</Typography>
              <Tooltip
                title="Amount of unresolved open tickets"
                placement="top"
              >
                <HelpIcon sx={{ fontSize: "15px" }} />
              </Tooltip>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <FiArrowUpRight size={16} />
              <Typography variant="caption">+3.7%</Typography>
            </Stack>
          </Box>
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: "500",
                lineHeight: "24px",
                color: (theme) => theme.palette.color.secondary,
                "& span": {
                  color: (theme) => theme.palette.color.green,
                },
              }}
            >
              <span>1/</span> 1,205.00$
            </Typography>
            <Typography variant="body2">
              For every dollar you pay out - you get 1,205.00$
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ height: "137px" }}>
        <InfoBox
          item={{
            title: "Total payout request",
            tooltip: "Amount of unresolved open tickets",
            value: 51,
          }}
        />
      </Grid>
    </>
  );
};

export default ThirdSection;
