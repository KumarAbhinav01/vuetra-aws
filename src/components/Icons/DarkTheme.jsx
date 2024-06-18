import { useTheme } from "@mui/material";
import * as React from "react";

const DarkThemeIcon = ({ stroke, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M18.25 15.031C17.748 15.145 17.235 15.203 16.72 15.203C12.808 15.203 9.636 11.919 9.636 7.867C9.636 6.753 9.876 5.696 10.306 4.75C7.128 5.474 4.75 8.407 4.75 11.914C4.75 15.966 7.922 19.25 11.835 19.25C14.671 19.25 17.118 17.524 18.25 15.031Z"
        fill={stroke || theme.palette.color.primary}
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DarkThemeIcon;
