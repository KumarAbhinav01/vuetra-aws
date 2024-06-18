import { useTheme } from "@mui/material";
import * as React from "react";

const AttachIcon = ({ stroke, ...props }) => {
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
        d="M16.7501 13.2501L18.0001 12.0001C18.7956 11.2044 19.2426 10.1252 19.2426 9.00006C19.2426 7.87487 18.7956 6.79576 18.0001 6.00006C17.2044 5.2045 16.1252 4.75757 15.0001 4.75757C13.8749 4.75757 12.7958 5.2045 12.0001 6.00006L10.7501 7.25006M7.25006 10.7501L6.00006 12.0001C5.2045 12.7958 4.75757 13.8749 4.75757 15.0001C4.75757 16.1252 5.2045 17.2044 6.00006 18.0001C6.79576 18.7956 7.87487 19.2426 9.00006 19.2426C10.1252 19.2426 11.2044 18.7956 12.0001 18.0001L13.2501 16.7501M14.2501 9.75006L9.75006 14.2501"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachIcon;
