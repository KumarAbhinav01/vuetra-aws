import * as React from "react";
import { useTheme } from "@mui/material";

const RefreshIcon = ({ strokeColor, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.22363 12.5647C5.22363 13.8212 5.59634 15.0494 6.29516 16.0941C6.99257 17.1388 7.98504 17.9534 9.14552 18.4348C10.306 18.9148 11.5836 19.0419 12.8161 18.7963C14.0486 18.5506 15.1808 17.9464 16.0688 17.057C16.9568 16.169 17.5625 15.0367 17.8081 13.8043C18.0523 12.5718 17.9267 11.2956 17.4467 10.1337C16.9653 8.9732 16.1507 7.98073 15.106 7.28332C14.0613 6.5845 12.833 6.21179 11.5766 6.21179C9.80057 6.21885 8.09657 6.91203 6.81893 8.14591L5.22363 9.7412"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.22363 6.21179V9.7412H8.75304"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5764 9.03528V12.5647L14.3999 13.9765"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
