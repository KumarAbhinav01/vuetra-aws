import { useTheme } from "@mui/material";
import * as React from "react";

const FileIcon = ({ stroke, ...props }) => {
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
        d="M7.75 19.25H16.25C16.7804 19.25 17.2891 19.0393 17.6642 18.6642C18.0393 18.2891 18.25 17.7804 18.25 17.25V9L14 4.75H7.75C7.21957 4.75 6.71086 4.96071 6.33579 5.33579C5.96071 5.71086 5.75 6.21957 5.75 6.75V17.25C5.75 17.7804 5.96071 18.2891 6.33579 18.6642C6.71086 19.0393 7.21957 19.25 7.75 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9.25H13.75V5"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
