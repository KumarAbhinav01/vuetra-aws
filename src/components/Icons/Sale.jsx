import { useTheme } from "@mui/material";
import * as React from "react";

const SalesIcon = ({ stroke, ...props }) => {
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
        d="M15.638 8.54199L8 16"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6999 16.418C15.2179 16.418 15.6379 15.998 15.6379 15.48C15.6379 14.962 15.2179 14.543 14.6999 14.543C14.1819 14.543 13.7629 14.962 13.7629 15.48C13.7629 15.998 14.1819 16.418 14.6999 16.418Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.69994 10.417C9.21794 10.417 9.63794 9.99799 9.63794 9.47999C9.63794 8.96199 9.21794 8.54199 8.69994 8.54199C8.18194 8.54199 7.76294 8.96199 7.76294 9.47999C7.76294 9.99799 8.18194 10.417 8.69994 10.417Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SalesIcon;
