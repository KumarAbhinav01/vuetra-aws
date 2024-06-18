import { useTheme } from "@mui/material";
import * as React from "react";

const CalendarIcon = ({ stroke, ...props }) => {
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
        d="M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25M4.75 8.75C4.75 8.21957 4.96071 7.71086 5.33579 7.33579C5.71086 6.96071 6.21957 6.75 6.75 6.75H17.25C17.7804 6.75 18.2891 6.96071 18.6642 7.33579C19.0393 7.71086 19.25 8.21957 19.25 8.75V17.25C19.25 17.7804 19.0393 18.2891 18.6642 18.6642C18.2891 19.0393 17.7804 19.25 17.25 19.25H6.75C6.21957 19.25 5.71086 19.0393 5.33579 18.6642C4.96071 18.2891 4.75 17.7804 4.75 17.25V8.75Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarIcon;
