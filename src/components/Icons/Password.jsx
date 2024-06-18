import * as React from "react";
import { useTheme } from "@mui/material";

const PasswordIcon = ({ strokeColor, ...props }) => {
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
        d="M7.75 10.5V10.343C7.75 8.781 7.656 7.041 8.746 5.923C9.368 5.288 10.374 4.75 12 4.75C13.626 4.75 14.632 5.287 15.254 5.924C16.344 7.041 16.25 8.781 16.25 10.343V10.5M5.75 11.75C5.75 11.4848 5.85536 11.2304 6.04289 11.0429C6.23043 10.8554 6.48478 10.75 6.75 10.75H17.25C17.5152 10.75 17.7696 10.8554 17.9571 11.0429C18.1446 11.2304 18.25 11.4848 18.25 11.75V17.25C18.25 17.7804 18.0393 18.2891 17.6642 18.6642C17.2891 19.0393 16.7804 19.25 16.25 19.25H7.75C7.21957 19.25 6.71086 19.0393 6.33579 18.6642C5.96071 18.2891 5.75 17.7804 5.75 17.25V11.75Z"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PasswordIcon;
