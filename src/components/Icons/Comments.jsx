import { useTheme } from "@mui/material";
import * as React from "react";

const CommentIcon = ({ stroke, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_627_1571)">
        <path
          d="M7.06299 16.937L10.25 16.187L17.22 9.21701C17.3604 9.07638 17.4393 8.88576 17.4393 8.68701C17.4393 8.48826 17.3604 8.29763 17.22 8.15701L15.843 6.78001C15.7024 6.63956 15.5117 6.56067 15.313 6.56067C15.1142 6.56067 14.9236 6.63956 14.783 6.78001L7.81299 13.75L7.06299 16.937Z"
          stroke={stroke || theme.palette.color.primary}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1571">
          <rect
            width="13"
            height="13"
            fill="white"
            transform="translate(5.5 5.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CommentIcon;
