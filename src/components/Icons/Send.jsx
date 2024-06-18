import { useTheme } from "@mui/material";
import * as React from "react";

const SendIcon = ({ stroke, ...props }) => {
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
        d="M22.0799 1.9815L10.8299 13.2315M22.1384 1.365C22.2164 1.3425 22.2989 1.3395 22.3784 1.3605C22.4564 1.38 22.5284 1.4205 22.5854 1.479C22.6424 1.536 22.6844 1.608 22.7039 1.6875C22.7234 1.7655 22.7219 1.848 22.6979 1.926L16.8554 21.4035C16.8314 21.486 16.7834 21.5595 16.7174 21.6165C16.6529 21.672 16.5719 21.708 16.4864 21.72C16.4009 21.732 16.3154 21.72 16.2359 21.684C16.1579 21.648 16.0919 21.5895 16.0454 21.5175L10.7534 13.3095L2.54538 8.0175C2.47338 7.971 2.41488 7.905 2.37888 7.827C2.34288 7.749 2.33088 7.662 2.34288 7.5765C2.35488 7.491 2.39088 7.41 2.44638 7.3455C2.50338 7.2795 2.57688 7.2315 2.65938 7.2075L22.1384 1.365Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
