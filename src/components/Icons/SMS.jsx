import { useTheme } from "@mui/material";
import * as React from "react";

const SMSIcon = ({ stroke, ...props }) => {
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
        d="M11.75 16.75H12.25M15.25 19.25H8.75C8.21957 19.25 7.71086 19.0393 7.33579 18.6642C6.96071 18.2891 6.75 17.7804 6.75 17.25V6.75C6.75 6.21957 6.96071 5.71086 7.33579 5.33579C7.71086 4.96071 8.21957 4.75 8.75 4.75H15.25C15.7804 4.75 16.2891 4.96071 16.6642 5.33579C17.0393 5.71086 17.25 6.21957 17.25 6.75V17.25C17.25 17.7804 17.0393 18.2891 16.6642 18.6642C16.2891 19.0393 15.7804 19.25 15.25 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SMSIcon;
