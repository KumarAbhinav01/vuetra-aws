import { useTheme } from "@mui/material";
import * as React from "react";

const CollapseIcon = ({ stroke, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        d="M11.0899 1.89404H3.40391C2.79791 1.89404 2.30591 2.38604 2.30591 2.99204V10.679C2.30591 11.285 2.79791 11.776 3.40391 11.776H11.0899C11.6969 11.776 12.1879 11.285 12.1879 10.679V2.99204C12.1879 2.38604 11.6969 1.89404 11.0899 1.89404Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.09776}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6391 1.89404H7.24707V11.776H11.6391C11.9431 11.776 12.1881 11.285 12.1881 10.679V2.99204C12.1881 2.38604 11.9431 1.89404 11.6391 1.89404Z"
        fill="black"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.09776}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CollapseIcon;
