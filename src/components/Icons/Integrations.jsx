import { useTheme } from "@mui/material";
import * as React from "react";

const IntegrationsIcon = ({ stroke, ...props }) => {
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
        d="M10.7929 13.207H6.93091L13.2069 5V10.793H17.0689L10.7929 19V13.207Z"
        fill="none"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IntegrationsIcon;
