import { useTheme } from "@mui/material";
import * as React from "react";

const SelfHostedIcon = ({ stroke, ...props }) => {
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
        d="M19.25 7C19.25 8.105 15.866 9.25 12 9.25C8.134 9.25 4.75 8.105 4.75 7M19.25 7C19.25 5.895 15.866 4.75 12 4.75C8.134 4.75 4.75 5.895 4.75 7M19.25 7V11.25M4.75 7V17C4.75 18.105 8.134 19.25 12 19.25H12.25M4.75 12C4.75 13.105 8.134 14.25 12 14.25H12.25M19.25 14.75C19.25 14.75 17.321 16.84 16.357 19.25L14.75 17.321"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelfHostedIcon;
