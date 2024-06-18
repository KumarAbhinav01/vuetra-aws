import { useTheme } from "@mui/material";
import * as React from "react";

const FlagIcon = ({ stroke, ...props }) => {
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
        d="M4.75 4.75V19.25M4.75 4.75L19.25 10C19.25 10 17 13.25 12 13.25C7 13.25 4.75 15.25 4.75 15.25V4.75Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FlagIcon;
