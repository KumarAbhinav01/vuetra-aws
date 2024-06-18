import * as React from "react";
import { useTheme } from "@mui/material";

const PayoutsIcon1 = ({ strokeColor, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 12.25V8.75C19.25 8.21957 19.0393 7.71086 18.6642 7.33579C18.2891 6.96071 17.7804 6.75 17.25 6.75H6.75C6.21957 6.75 5.71086 6.96071 5.33579 7.33579C4.96071 7.71086 4.75 8.21957 4.75 8.75V15.25C4.75 15.7804 4.96071 16.2891 5.33579 16.6642C5.71086 17.0393 6.21957 17.25 6.75 17.25H19.25M19.25 17.25L17.75 15.75M19.25 17.25L17.75 19M14.25 12C14.25 13.795 13.243 15.25 12 15.25C10.757 15.25 9.75 13.795 9.75 12C9.75 10.205 10.757 8.75 12 8.75C13.243 8.75 14.25 10.205 14.25 12Z"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PayoutsIcon1;
