import { useTheme } from "@mui/material";
import * as React from "react";

const HelpCenterIcon = ({ stroke, ...props }) => {
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
        d="M19.25 12C19.25 12.9521 19.0625 13.8948 18.6981 14.7745C18.3338 15.6541 17.7997 16.4533 17.1265 17.1265C16.4533 17.7997 15.6541 18.3338 14.7745 18.6981C13.8948 19.0625 12.9521 19.25 12 19.25C11.0479 19.25 10.1052 19.0625 9.22554 18.6981C8.34593 18.3338 7.5467 17.7997 6.87348 17.1265C6.20025 16.4533 5.66622 15.6541 5.30187 14.7745C4.93753 13.8948 4.75 12.9521 4.75 12C4.75 10.0772 5.51384 8.23311 6.87348 6.87348C8.23311 5.51384 10.0772 4.75 12 4.75C13.9228 4.75 15.7669 5.51384 17.1265 6.87348C18.4862 8.23311 19.25 10.0772 19.25 12Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.751 13.827 11.503 12.98 11.83C12.465 12.029 12 12.448 12 13V13.25"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 16C12.5 16.1326 12.4473 16.2598 12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5C11.8674 16.5 11.7402 16.4473 11.6464 16.3536C11.5527 16.2598 11.5 16.1326 11.5 16C11.5 15.8674 11.5527 15.7402 11.6464 15.6464C11.7402 15.5527 11.8674 15.5 12 15.5C12.1326 15.5 12.2598 15.5527 12.3536 15.6464C12.4473 15.7402 12.5 15.8674 12.5 16Z"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HelpCenterIcon;
