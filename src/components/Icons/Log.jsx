import { useTheme } from "@mui/material";
import * as React from "react";

const LogIcon = ({ stroke, ...props }) => {
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
        d="M4.75 11.75H8.25L10.25 4.75L13.75 19.25L15.75 11.75H19.25"
        stroke={stroke || theme.palette.primary.main}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogIcon;
