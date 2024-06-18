import { useTheme } from "@mui/material";
import * as React from "react";

const VimeoIcon = ({ fill, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_627_1684)">
        <path
          d="M18.493 8.77597C18.43 10.126 17.479 11.975 15.638 14.323C13.735 16.774 12.124 18 10.806 18C9.991 18 9.3 17.252 8.736 15.756L7.606 11.643C7.188 10.147 6.738 9.39897 6.257 9.39897C6.152 9.39897 5.786 9.61697 5.159 10.054L4.5 9.21197C5.184 8.61497 5.864 8.01197 6.539 7.40497C7.46 6.61497 8.15 6.19997 8.61 6.15797C9.698 6.05397 10.367 6.79197 10.618 8.37097C10.89 10.074 11.078 11.134 11.183 11.549C11.497 12.962 11.842 13.668 12.218 13.668C12.511 13.668 12.95 13.211 13.536 12.297C14.122 11.383 14.435 10.687 14.477 10.209C14.561 9.41997 14.247 9.02497 13.536 9.02497C13.201 9.02497 12.856 9.09797 12.501 9.24297C13.191 7.02097 14.509 5.93997 16.454 6.00297C17.897 6.04397 18.577 6.96897 18.493 8.77597Z"
          fill={fill || theme.palette.color.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1684">
          <rect
            width="15"
            height="12"
            fill="white"
            transform="translate(4.5 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VimeoIcon;