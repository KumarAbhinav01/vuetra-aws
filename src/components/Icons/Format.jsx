import { useTheme } from "@mui/material";
import * as React from "react";

const FormatIcon = ({ stroke, ...props }) => {
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
        d="M19.25 11.75L17.664 6.2C17.5445 5.78221 17.2922 5.41471 16.9452 5.15309C16.5983 4.89148 16.1755 4.74998 15.741 4.75H8.26C7.82529 4.74976 7.40233 4.89116 7.05517 5.15279C6.70801 5.41443 6.45555 5.78205 6.336 6.2L4.75 11.75M19.25 11.75V17.25C19.25 17.7804 19.0393 18.2891 18.6642 18.6642C18.2891 19.0393 17.7804 19.25 17.25 19.25H6.75C6.21957 19.25 5.71086 19.0393 5.33579 18.6642C4.96071 18.2891 4.75 17.7804 4.75 17.25V11.75M19.25 11.75H14.83C14.405 11.75 14.044 12.033 13.786 12.369C13.5761 12.6433 13.3057 12.8655 12.996 13.0183C12.6862 13.1711 12.3454 13.2504 12 13.25C11.6546 13.2504 11.3138 13.1711 11.004 13.0183C10.6943 12.8655 10.4239 12.6433 10.214 12.369C9.956 12.033 9.594 11.75 9.171 11.75H4.75"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FormatIcon;