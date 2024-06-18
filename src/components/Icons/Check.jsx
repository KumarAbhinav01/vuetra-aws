import { useTheme } from "@mui/material";
import * as React from "react";

const CheckIcon = ({ stroke, strokeWidth = 1.5, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M7.75 12.75L10 15.25L16.25 8.75"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
