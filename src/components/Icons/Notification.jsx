import * as React from "react";
import { useTheme } from "@mui/material";

const NotificationIcon = ({ stroke, ...props }) => {
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
        d="M15.9375 12.1875V10.6875C15.9375 8.51251 14.1745 6.74951 11.9995 6.74951C9.8245 6.74951 8.0625 8.51251 8.0625 10.6875V12.1875L6.5625 15.3755H17.4375L15.9375 12.1875Z"
        stroke={stroke || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 15.3755C9.75 15.3755 9.75 17.2505 12 17.2505C14.25 17.2505 14.25 15.3755 14.25 15.3755"
        stroke={stroke || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationIcon;
