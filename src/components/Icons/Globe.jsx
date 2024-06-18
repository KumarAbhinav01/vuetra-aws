import { useTheme } from "@mui/material";
import * as React from "react";

const GlobeIcon = ({ stroke, ...props }) => {
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
        d="M19.25 12C19.25 12.9521 19.0625 13.8948 18.6981 14.7745C18.3338 15.6541 17.7997 16.4533 17.1265 17.1265C16.4533 17.7997 15.6541 18.3338 14.7745 18.6981C13.8948 19.0625 12.9521 19.25 12 19.25C11.0479 19.25 10.1052 19.0625 9.22554 18.6981C8.34593 18.3338 7.5467 17.7997 6.87348 17.1265C6.20025 16.4533 5.66622 15.6541 5.30187 14.7745C4.93753 13.8948 4.75 12.9521 4.75 12C4.75 10.0772 5.51384 8.23311 6.87348 6.87348C8.23311 5.51384 10.0772 4.75 12 4.75C13.9228 4.75 15.7669 5.51384 17.1265 6.87348C18.4862 8.23311 19.25 10.0772 19.25 12Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 5.5V9.25C9.25 10.0456 8.93393 10.8087 8.37132 11.3713C7.80871 11.9339 7.04565 12.25 6.25 12.25H5M10 18.5C10 18.5 10.75 17 10.75 15C10.75 12.85 13.153 14.028 13.827 10.743C14.048 9.661 14.895 8.75 16 8.75H18"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobeIcon;
