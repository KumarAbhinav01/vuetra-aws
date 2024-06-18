import { useTheme } from "@mui/material";
import * as React from "react";

const HomeIcon = ({ fill, ...props }) => {
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
      <g clipPath="url(#clip0_627_1540)">
        <path
          d="M17.4119 9.92488V18.146C17.4119 18.3614 17.2416 18.5318 17.0261 18.5318H14.3117C14.0962 18.5318 13.9259 18.3614 13.9259 18.146V15.8173C13.9259 15.2814 13.7104 14.7907 13.3573 14.4445C13.0369 14.1241 12.6052 13.9149 12.1277 13.8884C10.9898 13.8037 10.0417 14.8303 10.0417 15.9744V17.943C10.0417 18.3684 9.87133 18.538 9.65589 18.538H6.94144C6.726 18.538 6.55566 18.3684 6.55566 18.1522V9.93188C6.55566 9.81365 6.60778 9.70943 6.70578 9.63088L11.7551 5.54988C11.892 5.43243 12.1012 5.43243 12.2451 5.54988L17.2944 9.63088C17.3854 9.70321 17.4446 9.81365 17.4446 9.93188H17.4383L17.4119 9.92488Z"
          fill={fill || theme.palette.color.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1540">
          <rect
            width="11.6667"
            height="14"
            fill="white"
            transform="translate(6.16675 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
