import { useTheme } from "@mui/material";
import * as React from "react";

const AnnouncementIcon = ({ stroke, ...props }) => {
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
        d="M19.25 10C19.25 12.729 17.85 15.25 16.5 15.25C15.15 15.25 13.75 12.729 13.75 10C13.75 7.271 15.15 4.75 16.5 4.75C17.85 4.75 19.25 7.271 19.25 10Z"
        stroke={stroke || theme.palette.text.primary} // Default stroke color
        strokeWidth="1.5"
      />
      <path
        d="M16.5 15.25C16.5 15.25 8 13.5 7 13.25C6 13 4.75 11.69 4.75 10C4.75 8.31 6 7 7 6.75C8 6.5 16.5 4.75 16.5 4.75M6.75 13.5V17.25C6.75 17.7804 6.96071 18.2891 7.33579 18.6642C7.71086 19.0393 8.21957 19.25 8.75 19.25H9.25C9.78043 19.25 10.2891 19.0393 10.6642 18.6642C11.0393 18.2891 11.25 17.7804 11.25 17.25V14.5"
        stroke={stroke || theme.palette.text.primary} // Default stroke color
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default AnnouncementIcon;
