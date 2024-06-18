import { useTheme } from "@mui/material";
import * as React from "react";

const CopyIcon = ({ stroke, ...props }) => {
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
        d="M6.5 15.25C6.03587 15.25 5.59075 15.0656 5.26256 14.7374C4.93437 14.4092 4.75 13.9641 4.75 13.5V6.75C4.75 6.21957 4.96071 5.71086 5.33579 5.33579C5.71086 4.96071 6.21957 4.75 6.75 4.75H13.5C14.466 4.75 15.25 5.534 15.25 6.5"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 8.75H10.75C9.64543 8.75 8.75 9.64543 8.75 10.75V17.25C8.75 18.3546 9.64543 19.25 10.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V10.75C19.25 9.64543 18.3546 8.75 17.25 8.75Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
