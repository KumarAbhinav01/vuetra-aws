import { useTheme } from "@mui/material";
import * as React from "react";

const ShieldIcon = ({ stroke, ...props }) => {
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
        d="M12.0001 4.75L4.75014 8C4.75014 8 4.00014 19.25 12.0001 19.25C20.0001 19.25 19.2501 8 19.2501 8L12.0001 4.75Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldIcon;
