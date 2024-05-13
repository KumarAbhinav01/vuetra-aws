import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";
import { BiExport } from "react-icons/bi";
import FormSelect from "../../components/ui/FormSelect";
import InfoBox from "../../components/ui/InfoBox";
import HelpIcon from "@mui/icons-material/Help";
import LineChart from "../../components/Charts/LineChart";
import { FiArrowUpRight } from "react-icons/fi";

const items = [
  {
    title: "Passed this month",
    tooltip: "Amount of unresolved open tickets",
    value: "41",
  },
  {
    title: "Failed this month",
    tooltip: "Amount of unresolved open tickets",
    value: "1100",
  },
  {
    title: "Order - payout",
    tooltip: "Amount of unresolved open tickets",
    value: "41",
  },
  {
    title: "Avr. payout",
    tooltip: "Amount of unresolved open tickets",
    value: "$1,050.00",
  },
];

const items2 = [
  {
    title: "ATF ratio",
    tooltip: "Amount of unresolved open tickets",
    value: "41",
  },
  {
    title: "FTP ratio",
    tooltip: "Amount of unresolved open tickets",
    value: "41",
  },
];

const Traders = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        py: "12px",
        px: "48px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Traders</Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            fontSize: "11.5px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "11.5px",
              py: "3px",
              px: "8px",
              border: (theme) =>
                `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
            }}
          >
            <BiExport /> Export
          </Typography>
          <FormSelect
            options={[{ value: "all", label: "All products" }]}
            defaultValue="all"
          />
        </Stack>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Grid container>
        {items.map((item, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <InfoBox item={item} index={index} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Divider />
        </Grid>
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
                <Typography variant="caption">Time to breach</Typography>
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
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.color.green,
                    }}
                  />
                  <Typography variant="body2">Eval 1</Typography>
                </Stack>
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(126, 131, 255)",
                    }}
                  />
                  <Typography variant="body2">Eval 2</Typography>
                </Stack>
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.color.secondary,
                    }}
                  />
                  <Typography variant="body2">Funded</Typography>
                </Stack>
              </Stack>
            </Box>
            <LineChart
              height="300"
              categories={["0", "3d", "6d", "9d", "12d", "15d", "18d"]}
              colors={[
                theme.palette.color.green,
                "rgb(126, 131, 255)",
                "#8A96A6",
              ]}
              options={{
                markers: {
                  size: 10,
                  colors: undefined,
                  strokeWidth: 0,
                  strokeOpacity: 0.9,
                  strokeDashArray: 0,
                  fillOpacity: 1,
                  discrete: [],
                  shape: "circle",
                  radius: 2,
                  offsetX: 0,
                  offsetY: 0,
                  onClick: undefined,
                  onDblClick: undefined,
                  showNullDataPoints: true,
                  hover: {
                    size: undefined,
                    sizeOffset: 3,
                  },
                },
                yaxis: {
                  tickAmount: 4,
                  labels: {
                    style: {
                      colors: theme.palette.color.secondary,
                      fontSize: "13px",
                    },
                    formatter: function (val) {
                      return val + 10 + "%";
                    },
                  },
                },
                xaxis: {
                  categories: ["0", "3d", "6d", "9d", "12d", "15d", "18d"],
                  axisBorder: {
                    show: false,
                  },
                  labels: {
                    style: {
                      colors: theme.palette.color.secondary,
                      fontSize: "13px",
                    },
                  },
                  axisTicks: {
                    show: false,
                  },
                  tickAmount: 7,
                },
                stroke: {
                  curve: "straight",
                  width: 2,
                },
              }}
              series={[
                {
                  name: "Eval 1",
                  data: [null, null, 17, 50, 60, null],
                },
                {
                  name: "Eval 2",
                  data: [null, 23, 35, 56, 70, null, null],
                },
                {
                  name: "Funded",
                  data: [20, 53, 70, null, null, null, null],
                },
              ]}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack
            sx={{
              height: "100%",
              background: (theme) => theme.palette.color.bg2,
            }}
          >
            {Array.from({ length: 2 }).map((_, index) => (
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
                    <Typography variant="caption">New orders</Typography>
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
                    <Typography variant="caption">+3.8%</Typography>
                  </Stack>
                </Box>
                <Typography variant="h1">321</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {items2.map((item, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <InfoBox item={item} index={index} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                p: "24px",
                color: (theme) => theme.palette.color.secondary,
              }}
            >
              <Typography variant="caption">Breach point</Typography>
              <Tooltip
                title="Amount of unresolved open tickets"
                placement="top"
              >
                <HelpIcon sx={{ fontSize: "15px" }} />
              </Tooltip>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormSelect
                options={[{ value: "all", label: "All products" }]}
                defaultValue="all"
              />
              <FormSelect
                options={[{ value: "all", label: "All sizes" }]}
                defaultValue="all"
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <LineChart
            height="300"
            categories={["0", "3d", "6d", "9d", "12d", "15d", "18d"]}
            colors={[
              theme.palette.color.green,
              theme.palette.color.purple,
              theme.palette.color.darkblue,
              theme.palette.color.secondary,
            ]}
            options={{
              chart: {
                type: "donut",
                foreColor: "#ffffff",
              },
              grid: {
                borderColor: "#EF3252",
              },

              labels: ["Phase 1", "Phase 2", "Funded", "Payout"],
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
              plotOptions: {
                pie: {
                  borderRadius: 10,
                  donut: {
                    size: "50%",
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        fontSize: "18px",
                        fontFamily: "Inter, sans-serif",
                        color: theme.palette.color.secondary,
                        fontWeight: "600",
                        formatter: function (w) {
                          return w === "Total" ? "Product name" : w;
                        },
                      },
                      value: {
                        show: true,
                        fontSize: "22px",
                        fontFamily: "Inter, sans-serif",
                        color: theme.palette.color.purple,
                        fontWeight: "600",
                      },
                      total: {
                        show: true,
                        fontSize: "16px",
                        fontFamily: "Inter, sans-serif",
                        color: theme.palette.color.secondary,
                        fontWeight: "600",
                      },
                    },
                  },
                },
              },
              datasets: [
                {
                  borderColor: ["#EF3252"],
                },
              ],
            }}
            series={[55, 35, 9, 1]}
            type="donut"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "24px",
              height: "300px",
              borderTop: (theme) => `1px solid ${theme.palette.color.border}`,
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginBottom: "24px !important" }}
            >
              Product name
            </Typography>
            <Stack spacing={3} sx={{ pt: "32px" }}>
              {[
                {
                  title: "Phase 1",
                  value: "55%",
                  color: "green",
                },
                {
                  title: "Phase 2",
                  value: "35%",
                  color: "purple",
                },
                {
                  title: "Funded",
                  value: "9%",
                  color: "darkblue",
                },
                {
                  title: "Payout",
                  value: "1%",
                  color: "secondary",
                },
              ].map((item, index) => (
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.color[item.color],
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "13.56px",
                        fontWeight: "500",
                        color: (theme) => theme.palette.color.primary,
                        pr: "4px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13.56px",
                        fontWeight: "500",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  >
                    -
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Traders;
