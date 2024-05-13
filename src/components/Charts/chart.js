import { memo } from "react";
import ApexChart from "react-apexcharts";

import { alpha, styled } from "@mui/material/styles";

export function bgBlur(props) {
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      position: "relative",
      backgroundImage: `url(${imgUrl})`,
      "&:before": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: "100%",
        height: "100%",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}

const Chart = styled(ApexChart)(({ theme }) => ({
  "& .apexcharts-canvas": {
    "& .apexcharts-tooltip": {
      ...bgBlur({
        color: theme.palette.color.secondary,
      }),
      color: theme.palette.color.seoondary,
      borderRadius: theme.shape.borderRadius * 1.25,
      "&.apexcharts-theme-light": {
        borderColor: "transparent",
        ...bgBlur({
          color: theme.palette.color.bg4,
        }),
      },
    },
    "& .apexcharts-xaxistooltip": {
      ...bgBlur({
        color: theme.palette.color.bg4,
      }),
      borderColor: "transparent",
      color: theme.palette.color.primary,
      borderRadius: theme.shape.borderRadius * 1.25,
      "&:before": {
        borderBottomColor: alpha(theme.palette.color.border, 0.24),
      },
      "&:after": {
        borderBottomColor: alpha(theme.palette.color.bg4, 0.8),
      },
    },
    "& .apexcharts-tooltip-title": {
      textAlign: "center",
      fontWeight: theme.typography.fontWeightBold,
      background: "transparent !important",
      color: theme.palette.text.primary,
      borderBottom: "none !important",
    },
  },
}));

export default memo(Chart);
