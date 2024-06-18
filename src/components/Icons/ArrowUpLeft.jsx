import { useTheme } from "@mui/material";
import * as React from "react";

const ArrowUpLeft = ({ stroke, ...props }) => {
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
        d="M19.5 19.5L4.5 4.5M4.5 4.5V15.75M4.5 4.5H15.75"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpLeft;
