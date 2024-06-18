import { useTheme } from "@mui/material";
import * as React from "react";

const UpAndDownArrowIcon = ({ stroke, ...props }) => {
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
        d="M14.4001 13.8L12.0001 16.2L9.6001 13.8M9.6001 10.2L12.0001 7.80005L14.4001 10.2"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpAndDownArrowIcon;
