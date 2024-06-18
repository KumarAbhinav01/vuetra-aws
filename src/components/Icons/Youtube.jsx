import { useTheme } from "@mui/material";
import * as React from "react";

const YoutubeIcon = ({ fill, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_627_1677)">
        <path
          d="M19.433 8.172C19.251 7.513 18.72 6.997 18.04 6.82C16.811 6.5 11.881 6.5 11.881 6.5C11.881 6.5 6.952 6.5 5.723 6.82C5.043 6.997 4.512 7.513 4.329 8.172C4 9.365 4 11.855 4 11.855C4 11.855 4 14.345 4.329 15.538C4.512 16.197 5.043 16.713 5.723 16.89C6.952 17.21 11.881 17.21 11.881 17.21C11.881 17.21 16.811 17.21 18.04 16.89C18.72 16.713 19.251 16.197 19.433 15.538C19.763 14.345 19.763 11.855 19.763 11.855C19.763 11.855 19.762 9.365 19.433 8.172Z"
          fill="#8A96A6"
        />
        <path
          d="M10.3032 14.1501L14.3992 11.8551L10.3032 9.56006V14.1501Z"
          fill="#0B0D0F"
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1677">
          <rect
            width="16"
            height="11"
            fill="white"
            transform="translate(4 6.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
