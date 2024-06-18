import { useTheme } from "@mui/material";
import * as React from "react";

const CredentialsIcon = ({ stroke, ...props }) => {
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
        d="M14.344 12.833C15.908 12.833 17.177 11.565 17.177 9.99999C17.177 8.43499 15.908 7.16699 14.344 7.16699C12.779 7.16699 11.51 8.43499 11.51 9.99999C11.51 10.207 11.532 10.408 11.574 10.602L7.51001 14.666V16.833H9.67701L10.177 16.333V15.166H11.344L12.177 14.333V13.166H13.344L13.741 12.769C13.935 12.811 14.137 12.833 14.344 12.833Z"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CredentialsIcon;
