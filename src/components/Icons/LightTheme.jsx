import { useTheme } from "@mui/material";
import * as React from "react";

const LightThemeIcon = ({ stroke, ...props }) => {
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
        d="M12 15.25C13.795 15.25 15.25 13.795 15.25 12C15.25 10.205 13.795 8.75 12 8.75C10.205 8.75 8.75 10.205 8.75 12C8.75 13.795 10.205 15.25 12 15.25Z"
        fill="none"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.75V4.25M17.25 6.75L16.066 7.934M21.25 12H19.75M17.25 17.25L16.066 16.066M12 19.75V21.25M7.934 16.066L6.75 17.25M4.25 12H2.75M7.934 7.934L6.75 6.75"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightThemeIcon;
