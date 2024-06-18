import { useTheme } from "@mui/material";
import * as React from "react";

const ChevronDownIcon = ({ stroke, strokeWidth = 1.5, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={5}
      viewBox="0 0 8 5"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_627_1442)">
        <path
          d="M7 1L4 4L1 1"
          stroke={stroke || theme.palette.color.primary}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1442">
          <rect width="8" height="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronDownIcon;
