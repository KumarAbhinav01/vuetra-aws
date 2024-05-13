import React from "react";
import { Box, Grid, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import LineChart from "../../Charts/LineChart";
import FormSelect from "../../ui/FormSelect";

const FifthSection = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} lg={12}>
      <Stack spacing={2} sx={{ p: "24px" }}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              pb: "10px",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            Product
          </Typography>
          <Stack direction="row" spacing={1}>
            <FormSelect
              options={[{ value: "all", label: "All products" }]}
              defaultValue="all"
            />
          </Stack>
        </Stack>
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
            <Typography variant="caption">Product sales performance</Typography>
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
              <Typography variant="body2">Product 1</Typography>
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
              <Typography variant="body2">Product 2</Typography>
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
              <Typography variant="body2">Product 3</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ width: "95%" }}>
          <LineChart
            height="300"
            categories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            colors={[
              theme.palette.color.green,
              "rgb(126, 131, 255)",
              theme.palette.color.secondary,
            ]}
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
            series={[
              {
                name: "Product 1",
                data: [10, 45, 10, 60, 30, 80, 50, 60, 10, 75, 35, 90],
              },
              {
                name: "Product 2",
                data: [20, 35, 20, 50, 40, 70, 40, 50, 20, 65, 25, 90],
              },
              {
                name: "Product 3",
                data: [30, 25, 30, 40, 50, 60, 30, 40, 30, 55, 15, 80],
              },
            ]}
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default FifthSection;
