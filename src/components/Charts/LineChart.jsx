import { useTheme } from "@mui/material";

import React, { useState } from "react";

import Chart from "./chart";

export default function LineChart({
  series,
  options,
  height,
  categories,
  colors,
  type,
}) {
  const theme = useTheme();
  const [state] = useState({
    options: {
      chart: {
        type: type || "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: colors,

      stroke: {
        curve: "monotoneCubic",
        width: 2,
      },

      xaxis: {
        categories: categories,
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
      },

      grid: {
        show: false,
      },
      ...options,
    },
  });
  return (
    <Chart
      options={state.options}
      series={series}
      type={type || "line"}
      height={height}
    />
  );
}
