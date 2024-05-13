import { Box, Grid, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import HelpIcon from "@mui/icons-material/Help";
import LineChart from "../../Charts/LineChart";

const FourthSection = ({ series }) => {
  const [selectedSeries, setSelectedSeries] = useState(series);
  const theme = useTheme();
  return (
    <>
      <Grid item xs={12} lg={6}>
        <Stack spacing={3} sx={{ p: "24px" }}>
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
              <Typography variant="caption">Open Payout Request</Typography>
              <Tooltip title="Open Payout Request" placement="top">
                <HelpIcon sx={{ fontSize: "15px" }} />
              </Tooltip>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
              }}
            >
              {series.map((s) => (
                <Stack
                  key={s.name}
                  direction="row"
                  spacing={0.7}
                  alignItems="center"
                  sx={{
                    cursor: "pointer",
                    transition: "all 500ms ease-in-out",
                    ":hover": {
                      opacity: 0.35,
                    },
                  }}
                  onClick={() => setSelectedSeries([s])}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: s.color,
                    }}
                  />
                  <Typography variant="body2">{s.name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
          <LineChart
            height="300"
            categories={["01", "02", "03", "04", "05", "06", "07"]}
            colors={selectedSeries.map((s) => s.color)}
            options={{
              yaxis: {
                tickAmount: 4,
                labels: {
                  style: {
                    colors: theme.palette.color.secondary,
                    fontSize: "13px",
                  },
                },
              },
            }}
            series={selectedSeries}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack
          sx={{
            height: "100%",
            background: (theme) => theme.palette.color.bg2,
            borderRadius: "12px",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Stack
              justifyContent={"space-between"}
              sx={{
                p: "24px",
                height: "100%",

                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
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
                  <Typography variant="caption">Total revenue</Typography>
                  <Tooltip title="Total revenue" placement="top">
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
              <Typography variant="h1">321</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default FourthSection;
