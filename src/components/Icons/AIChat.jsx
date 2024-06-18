import { useTheme } from "@mui/material";
import * as React from "react";

const AIChatIcon = ({ fill, ...props }) => {
  const theme = useTheme();

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_627_1742)">
        <path
          d="M17.9679 3.44995H6.03205C4.608 3.4547 3.4547 4.608 3.44995 6.03205V17.9679C3.4547 19.3919 4.608 20.5452 6.03205 20.55H17.9679C19.3919 20.5452 20.5452 19.3919 20.55 17.9679V6.03205C20.5433 4.60895 19.391 3.4566 17.9679 3.44995ZM19.1297 17.9679C19.1345 18.2785 19.0129 18.5778 18.7934 18.7972C18.574 19.0167 18.2747 19.1383 17.9641 19.1335H6.03205C5.37655 19.1335 4.8664 18.6234 4.8664 17.9679V6.03205C4.8664 5.37655 5.37655 4.8664 6.03205 4.8664H17.9679C18.6234 4.8664 19.1335 5.37655 19.1335 6.03205V17.9679H19.1297Z"
          fill={fill || theme.palette.text.primary} // Default fill color
        />
        <path
          d="M11.6437 9.3761C11.561 9.18515 11.372 9.0607 11.163 9.06165C10.954 9.0607 10.7649 9.1842 10.6813 9.3761L8.57993 14.2088C8.52483 14.3361 8.52198 14.4805 8.57328 14.6097C8.62458 14.7379 8.72528 14.8415 8.85258 14.8966C8.91813 14.927 8.98938 14.9422 9.06158 14.9422C9.26963 14.9412 9.45868 14.8187 9.54323 14.6277L10.004 13.5742H12.3381L12.7989 14.6277C12.9195 14.8833 13.2207 14.9973 13.48 14.8852C13.7394 14.7731 13.8629 14.4757 13.7593 14.2126L11.6437 9.3761ZM10.4543 12.5235L11.1658 10.8904L11.8783 12.5235H10.4543ZM14.9421 11.0548C14.8034 11.0548 14.6694 11.1099 14.5716 11.2077C14.4737 11.3056 14.4186 11.4395 14.4186 11.5782V14.4187C14.4186 14.7075 14.6533 14.9422 14.9421 14.9422C15.2309 14.9422 15.4655 14.7075 15.4655 14.4187V11.5782C15.4655 11.4395 15.4104 11.3056 15.3126 11.2077C15.2147 11.1099 15.0808 11.0548 14.9421 11.0548ZM14.9421 9.25735C14.8034 9.25735 14.6694 9.31245 14.5716 9.4103C14.4737 9.50815 14.4186 9.6421 14.4186 9.7808V9.92045C14.4186 10.2093 14.6533 10.4439 14.9421 10.4439C15.2309 10.4439 15.4655 10.2093 15.4655 9.92045V9.7808C15.4655 9.6421 15.4104 9.50815 15.3126 9.4103C15.2147 9.31245 15.0808 9.25735 14.9421 9.25735Z"
          fill={fill || theme.palette.text.primary} // Default fill color
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1742">
          <rect
            width="17.1"
            height="19"
            fill="white"
            transform="translate(3.44995 2.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AIChatIcon;