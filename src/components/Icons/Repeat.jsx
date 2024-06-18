import * as React from "react";
import { useTheme } from "@mui/material";

const RepeatIcon = ({ strokeColor, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25 9.25L4.75 7L7.25 4.75"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 7H16.25C17.907 7 19.25 8.343 19.25 10V11.25"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.75 19.25L19.25 17L16.75 14.75"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 17H7.75C6.093 17 4.75 15.657 4.75 14V12.75"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RepeatIcon;
