import { useTheme } from "@mui/material";
import * as React from "react";

const FolderIcon = ({ fill, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill || theme.palette.text.primary} // Default fill color
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.25 17.25V9.75C19.25 9.21957 19.0393 8.71086 18.6642 8.33579C18.2891 7.96071 17.7804 7.75 17.25 7.75H4.75V17.25C4.75 17.7804 4.96071 18.2891 5.33579 18.6642C5.71086 19.0393 6.21957 19.25 6.75 19.25H17.25C17.7804 19.25 18.2891 19.0393 18.6642 18.6642C19.0393 18.2891 19.25 17.7804 19.25 17.25Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 7.5L12.569 5.792C12.3969 5.4766 12.143 5.21338 11.834 5.03002C11.525 4.84666 11.1723 4.74993 10.813 4.75H6.75C6.21957 4.75 5.71086 4.96071 5.33579 5.33579C4.96071 5.71086 4.75 6.21957 4.75 6.75V11"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FolderIcon;
