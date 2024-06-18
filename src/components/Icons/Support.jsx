import { useTheme } from "@mui/material";
import * as React from "react";

const SupportIcon = ({ fill, ...props }) => {
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
        d="M6.09716 8.77689L16.8472 5.09089C18.1252 4.65289 19.3472 5.87489 18.9092 7.15289L15.2232 17.9029C14.7432 19.3029 12.7942 19.3829 12.2002 18.0269L10.4322 13.9859C10.3512 13.7989 10.2012 13.6489 10.0142 13.5679L5.97316 11.7999C4.61716 11.2059 4.69716 9.25689 6.09716 8.77689Z"
        fill={fill || theme.palette.color.primary}
      />
    </svg>
  );
};

export default SupportIcon;
