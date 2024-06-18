import { useTheme } from "@mui/material";
import * as React from "react";

const ArrowDownLeftIcon = ({ stroke, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 4.5L4.5 19.5M4.5 19.5H15.75M4.5 19.5V8.25"
        stroke={stroke || theme.palette.text.primary} // Default stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeftIcon;
