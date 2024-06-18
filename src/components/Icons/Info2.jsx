import { useTheme } from "@mui/material";
import * as React from "react";

const InfoIcon2 = ({ stroke, ...props }) => {
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
        d="M9.984 9C10.1701 8.62441 10.4575 8.30833 10.8137 8.08745C11.1699 7.86657 11.5808 7.74969 12 7.75C12.4465 7.74998 12.8829 7.88278 13.2536 8.13152C13.6244 8.38025 13.9128 8.73367 14.0821 9.14679C14.2514 9.55992 14.2939 10.0141 14.2044 10.4515C14.1148 10.8888 13.8971 11.2897 13.579 11.603C13.079 12.096 12.471 12.628 12.177 13.253M12 16.25V16.26M12 19.25C11.0479 19.25 10.1052 19.0625 9.22554 18.6981C8.34593 18.3338 7.5467 17.7997 6.87348 17.1265C6.20025 16.4533 5.66622 15.6541 5.30187 14.7745C4.93753 13.8948 4.75 12.9521 4.75 12C4.75 11.0479 4.93753 10.1052 5.30187 9.22554C5.66622 8.34593 6.20025 7.5467 6.87348 6.87348C7.5467 6.20025 8.34593 5.66622 9.22554 5.30187C10.1052 4.93753 11.0479 4.75 12 4.75C13.9228 4.75 15.7669 5.51384 17.1265 6.87348C18.4862 8.23311 19.25 10.0772 19.25 12C19.25 13.9228 18.4862 15.7669 17.1265 17.1265C15.7669 18.4862 13.9228 19.25 12 19.25Z"
        stroke={stroke || theme.palette.text.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon2;