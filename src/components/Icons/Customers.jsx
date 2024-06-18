import { useTheme } from "@mui/material";
import * as React from "react";

const CustomerIcon = ({ stroke, ...props }) => {
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
        d="M15.7501 14C17.8291 14 18.6801 16.148 19.0241 17.696C19.2091 18.532 18.5341 19.25 17.6771 19.25H16.7501M5.78207 19.25H13.2181C13.7831 19.25 14.2271 18.782 14.1141 18.229C13.8041 16.7 12.7901 14 9.50007 14C6.21007 14 5.19607 16.701 4.88507 18.229C4.77307 18.782 5.21707 19.25 5.78207 19.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.25C11.0188 10.25 12.25 9.01878 12.25 7.5C12.25 5.98122 11.0188 4.75 9.5 4.75C7.98122 4.75 6.75 5.98122 6.75 7.5C6.75 9.01878 7.98122 10.25 9.5 10.25Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.75 10.25C16.269 10.25 17.25 9.019 17.25 7.5C17.25 5.981 16.269 4.75 14.75 4.75"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomerIcon;
