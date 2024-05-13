import {
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";
import { BiExport } from "react-icons/bi";
import FormSelect from "../../components/ui/FormSelect";
import First from "../../components/Statistics/StorePerformance/First";
import SecondSection from "../../components/Statistics/StorePerformance/SecondSection";
import ThirdSection from "../../components/Statistics/StorePerformance/ThirdSection";
import InfoBox from "../../components/ui/InfoBox";
import FourthSection from "../../components/Statistics/StorePerformance/FourthSection";
import FifthSection from "../../components/Statistics/StorePerformance/FifthSection";

const items = [
  {
    title: "Total payout value",
    tooltip: "Amount of unresolved open tickets",
    value: "$150,105.00",
  },
  {
    title: "Total payout value",
    tooltip: "Amount of unresolved open tickets",
    value: "53",
  },
  {
    title: "Avg. order value",
    tooltip: "Amount of unresolved open tickets",
    value: "$150,105.00",
  },
  {
    title: "Refunds",
    tooltip: "Amount of unresolved open tickets",
    value: "$150,105.00",
  },
];

const items2 = [
  {
    title: "Best perf. product",
    tooltip: "Amount of unresolved open tickets",
    value: "Product name",
    text: "Prev. product name",
  },
  {
    title: "Worst perf. product",
    tooltip: "Amount of unresolved open tickets",
    value: "Product name",
    text: "Prev. product name",
  },
  {
    title: "Best acc. size",
    tooltip: "Amount of unresolved open tickets",
    value: "Acc. size",
    text: "Prev. product name",
  },
  {
    title: "Best acc. size",
    tooltip: "Amount of unresolved open tickets",
    value: "Acc. size",
    text: "Prev. product name",
  },
];

const Statistics = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        py: "12px",
        px: "48px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Store performance</Typography>
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
        <First />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <SecondSection />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <ThirdSection />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <FourthSection
          series={[
            {
              name: "Week 31",
              data: [0.5, 2, 1.2, 3.3, 0.8, 3.1, 1.7],
              color: theme.palette.color.secondary,
            },
            {
              name: "Week 32",
              data: [0, 2.8, 0.8, 4, 1.5, 3.4, 1.2],
              color: "rgb(0, 185, 217)",
            },
          ]}
        />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {items.map((item, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <InfoBox item={item} index={index} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <FifthSection />

        {items2.map((item, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <InfoBox item={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Statistics;
