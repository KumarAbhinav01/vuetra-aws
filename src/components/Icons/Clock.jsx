import { useTheme } from "@mui/material";
import * as React from "react";

const ClockIcon = ({ stroke, ...props }) => {
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
        d="M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
      />
      <path
        d="M12 8V12L14 14"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default ClockIcon;
