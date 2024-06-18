import { useTheme } from "@mui/material";
import * as React from "react";

const FirmIcon = ({ fill, ...props }) => {
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
      <g clipPath="url(#clip0_627_1539)">
        <path
          d="M7.24902 5C6.42402 5 5.74202 5.645 5.69602 6.469L5.09102 17.358C5.04202 18.25 5.75102 19 6.64402 19H17.356C18.249 19 18.958 18.25 18.909 17.358L18.304 6.469C18.258 5.645 17.576 5 16.751 5H7.24902ZM10.444 9.459C10.444 10.497 11.202 11.222 12 11.222C12.798 11.222 13.555 10.497 13.555 9.459V8.889C13.555 8.459 13.904 8.111 14.333 8.111C14.763 8.111 15.111 8.459 15.111 8.889V9.459C15.111 11.228 13.779 12.778 12 12.778C10.221 12.778 8.88902 11.228 8.88902 9.459V8.889C8.88902 8.459 9.23702 8.111 9.66702 8.111C10.096 8.111 10.444 8.459 10.444 8.889V9.459Z"
          fill={fill || theme.palette.color.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1539">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FirmIcon;
