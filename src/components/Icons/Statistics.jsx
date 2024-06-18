import { useTheme } from "@mui/material";
import * as React from "react";

const StatisticsIcon = ({ fill, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        d="M8.49404 13.578H6.16504V17.812H8.49404V13.578Z"
        fill={fill || theme.palette.color.primary}
      />
      <path
        d="M13.1591 17.783L13.1411 9.37402H10.8291V17.783H13.1591Z"
        fill={fill || theme.palette.color.primary}
      />
      <path
        d="M17.8119 6.16504H15.4829V17.812H17.8119V6.16504Z"
        fill={fill || theme.palette.color.primary}
      />
    </svg>
  );
};

export default StatisticsIcon;
