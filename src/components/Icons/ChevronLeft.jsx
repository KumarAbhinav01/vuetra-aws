import { useTheme } from "@mui/material";
import * as React from "react";

const ChevronLeftIcon = ({ stroke, strokeWidth = 1.16667, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={9}
      viewBox="0 0 6 9"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_627_1535)">
        <path
          d="M4.94995 1L1.44995 4.5L4.94995 8"
          stroke={stroke || theme.palette.color.primary}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1535">
          <rect width="6" height="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronLeftIcon;
