import { useTheme } from "@mui/material";
import * as React from "react";

const CircleIcon = ({ stroke, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="5.5"
        fill={stroke || theme.palette.color.primary}
      />
    </svg>
  );
};

export default CircleIcon;
