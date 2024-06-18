import { useTheme } from "@mui/material";
import * as React from "react";

const CommentsIcon1 = ({ stroke, ...props }) => {
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
        d="M5.4917 18.9191L6.83288 14.8942C6.19617 13.6208 6.0324 12.161 6.37264 10.7775C6.71288 9.39393 7.53452 8.17699 8.69076 7.34404C9.84699 6.5111 11.2616 6.11581 12.6818 6.23016C14.1021 6.34451 15.4348 6.96146 16.4413 7.96804C17.4493 8.97604 18.0649 10.3087 18.1792 11.729C18.295 13.1492 17.8997 14.5638 17.0668 15.72C16.2338 16.8749 15.0155 17.6965 13.6333 18.0367C12.2498 18.3784 10.7901 18.2146 9.51523 17.5779L5.4917 18.9191Z"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommentsIcon1;
