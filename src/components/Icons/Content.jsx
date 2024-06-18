import { useTheme } from "@mui/material";
import * as React from "react";

const ContentIcon = ({ fill, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_627_1773)">
        <path
          d="M18 8C18 6.895 17.105 6 16 6H8C6.895 6 6 6.895 6 8V16C6 17.105 6.895 18 8 18H13.414C13.945 18 14.453 17.789 14.829 17.414L17.414 14.829C17.789 14.453 18 13.945 18 13.414V8ZM8 9.75C8 9.336 8.336 9 8.75 9H15.25C15.664 9 16 9.336 16 9.75C16 10.164 15.664 10.5 15.25 10.5H8.75C8.336 10.5 8 10.164 8 9.75ZM8.75 12.5C8.336 12.5 8 12.836 8 13.25C8 13.664 8.336 14 8.75 14H12.25C12.664 14 13 13.664 13 13.25C13 12.836 12.664 12.5 12.25 12.5H8.75Z"
          fill={fill || theme.palette.color.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1773">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ContentIcon;
