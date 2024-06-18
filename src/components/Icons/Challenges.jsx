import { useTheme } from "@mui/material";
import * as React from "react";

const ChallengesIcon = ({ stroke, ...props }) => {
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
        d="M13.25 19.2499H4.75L7.146 13.3299C7.821 11.6639 10.18 11.6639 10.854 13.3299L13.25 19.2499Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 19.25H19.25L13 4.75L9.5 12"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChallengesIcon;
