import * as React from "react";
import { useTheme } from "@mui/material";

const PlusIcon = ({ strokeColor, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9995 7.3125V16.6875M16.6875 11.9995H7.3125"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
