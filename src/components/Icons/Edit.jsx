import { useTheme } from "@mui/material";
import * as React from "react";

const EditIcon = ({ stroke, ...props }) => {
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
        d="M4.75 19.25L9 18.25L18.563 8.68701C18.7764 8.47362 18.9457 8.22027 19.0612 7.94146C19.1767 7.66264 19.2361 7.3638 19.2361 7.06201C19.2361 6.76022 19.1767 6.46139 19.0612 6.18257C18.9457 5.90375 18.7764 5.65041 18.563 5.43701C18.3496 5.22361 18.0963 5.05434 17.8174 4.93885C17.5386 4.82336 17.2398 4.76392 16.938 4.76392C16.6362 4.76392 16.3374 4.82336 16.0586 4.93885C15.7797 5.05434 15.5264 5.22361 15.313 5.43701L5.75 15L4.75 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
