import { useTheme } from "@mui/material";
import * as React from "react";

const UpdateIcon = ({ stroke, ...props }) => {
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
        d="M18.7764 8.32947H6.07056"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.89409 12.5647H6.07056"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.89409 16.8H6.07056"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4234 16.8C12.8681 17.3929 13.4879 17.8306 14.1952 18.0522C14.9025 18.2724 15.6606 18.2654 16.3636 18.031C17.0667 17.7967 17.678 17.3477 18.11 16.7463C18.5434 16.1463 18.7764 15.4235 18.7764 14.6823C18.7764 13.8409 18.4418 13.032 17.846 12.4362C17.2502 11.8404 16.4427 11.5059 15.5999 11.5059C14.6611 11.5059 13.8069 11.887 13.1928 12.5012L11.7175 13.9764"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7175 11.153V13.9765H14.5411"
        stroke={stroke || theme.palette.color.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpdateIcon;
