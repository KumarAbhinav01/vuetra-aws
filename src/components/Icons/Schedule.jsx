import { useTheme } from "@mui/material";
import * as React from "react";

const ScheduleIcon = ({ stroke, ...props }) => {
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
        d="M19.25 9.25V8.75C19.25 8.21957 19.0393 7.71086 18.6642 7.33579C18.2891 6.96071 17.7804 6.75 17.25 6.75H6.75C6.21957 6.75 5.71086 6.96071 5.33579 7.33579C4.96071 7.71086 4.75 8.21957 4.75 8.75V17.25C4.75 17.7804 4.96071 18.2891 5.33579 18.6642C5.71086 19.0393 6.21957 19.25 6.75 19.25H9.25M15 13.75V15L16.25 16.25M8 4.75V8.25M16 4.75V8.25M15 19.25C13.8728 19.25 12.7918 18.8022 11.9948 18.0052C11.1978 17.2082 10.75 16.1272 10.75 15C10.75 13.8728 11.1978 12.7918 11.9948 11.9948C12.7918 11.1978 13.8728 10.75 15 10.75C16.1272 10.75 17.2082 11.1978 18.0052 11.9948C18.8022 12.7918 19.25 13.8728 19.25 15C19.25 16.1272 18.8022 17.2082 18.0052 18.0052C17.2082 18.8022 16.1272 19.25 15 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ScheduleIcon;
