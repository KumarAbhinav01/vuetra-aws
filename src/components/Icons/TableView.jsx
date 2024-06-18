import { useTheme } from "@mui/material";
import * as React from "react";

const TableViewIcon = ({ stroke, ...props }) => {
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
        d="M9.39698 8.49902H16.98M9.39698 11.999H16.98M9.39698 15.499H16.98M6.47998 8.49902H6.48598M6.47998 11.999H6.48598M6.47998 15.499H6.48598"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TableViewIcon;
