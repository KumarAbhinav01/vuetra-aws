import { useTheme } from "@mui/material";
import * as React from "react";

const DraftIcon = ({ stroke, ...props }) => {
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
        d="M19.25 19.25H13.75M4.75 19.25L9 18.25L18.293 8.95697C18.4805 8.76944 18.5858 8.51514 18.5858 8.24997C18.5858 7.98481 18.4805 7.7305 18.293 7.54297L16.457 5.70697C16.2695 5.5195 16.0152 5.41418 15.75 5.41418C15.4848 5.41418 15.2305 5.5195 15.043 5.70697L5.75 15L4.75 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DraftIcon;
