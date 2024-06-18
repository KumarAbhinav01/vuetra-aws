import { useTheme } from "@mui/material";
import * as React from "react";

const Articles = ({ stroke, ...props }) => {
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
        d="M6.56201 7.66524C7.90901 6.19524 10.091 6.19524 11.437 7.66524M7.95501 9.18724C8.53301 8.55724 9.46801 8.55724 10.045 9.18724M10.862 16.7792L8.06201 17.4372L8.72201 14.6372L14.853 8.50624C15.137 8.22224 15.522 8.06224 15.924 8.06224C16.326 8.06224 16.711 8.22224 16.995 8.50624C17.279 8.79024 17.438 9.17524 17.438 9.57724C17.438 9.97924 17.278 10.3642 16.994 10.6482L10.863 16.7792H10.862Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Articles;
