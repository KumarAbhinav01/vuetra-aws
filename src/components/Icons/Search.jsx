import { useTheme } from "@mui/material";
import * as React from "react";

const SearchIcon = ({ stroke, ...props }) => {
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
        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 9.3424 5.40848 7.75268 6.58058 6.58058C7.75268 5.40848 9.3424 4.75 11 4.75C12.6576 4.75 14.2473 5.40848 15.4194 6.58058C16.5915 7.75268 17.25 9.3424 17.25 11C17.25 12.6576 16.5915 14.2473 15.4194 15.4194C14.2473 16.5915 12.6576 17.25 11 17.25C9.3424 17.25 7.75268 16.5915 6.58058 15.4194C5.40848 14.2473 4.75 12.6576 4.75 11Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
