import { useTheme } from "@mui/material";
import * as React from "react";

const EyeCloseIcon = ({ stroke, ...props }) => {
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
        d="M18.625 10C19.065 10.899 19.25 11.675 19.25 12C19.25 13 17.5 18.25 12 18.25C11.3249 18.2536 10.6524 18.1675 10 17.994M7 16.269C5.362 14.669 4.75 12.59 4.75 12C4.75 11 6.5 5.75 12 5.75C13.795 5.75 15.19 6.309 16.256 7.097"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 4.75L4.75 19.25"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.409 13.591C9.98705 13.1691 9.75 12.5968 9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5968 9.75 13.1691 9.98705 13.591 10.409"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeCloseIcon;
