import { useTheme } from "@mui/material";
import * as React from "react";

const MailIcon1 = ({ stroke, ...props }) => {
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
        d="M4.75 7.75C4.75 7.21957 4.96071 6.71086 5.33579 6.33579C5.71086 5.96071 6.21957 5.75 6.75 5.75H17.25C17.7804 5.75 18.2891 5.96071 18.6642 6.33579C19.0393 6.71086 19.25 7.21957 19.25 7.75V16.25C19.25 16.7804 19.0393 17.2891 18.6642 17.6642C18.2891 18.0393 17.7804 18.25 17.25 18.25H6.75C6.21957 18.25 5.71086 18.0393 5.33579 17.6642C4.96071 17.2891 4.75 16.7804 4.75 16.25V7.75Z"
        stroke={stroke || theme.palette.primary.main}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 6.5L12 12.25L18.5 6.5"
        stroke={stroke || theme.palette.primary.main}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon1;
