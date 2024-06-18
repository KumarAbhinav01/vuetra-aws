import { useTheme } from "@mui/material";
import * as React from "react";

const CalendarViewIcon = ({ stroke, ...props }) => {
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
        d="M10.1802 9.66602H14.2632M9.59718 11.999H13.0972M11.3472 14.332H14.2632M16.0132 6.74902H7.84718C7.20218 6.74902 6.68018 7.27102 6.68018 7.91602V16.082C6.68018 16.727 7.20218 17.249 7.84718 17.249H16.0132C16.6582 17.249 17.1802 16.727 17.1802 16.082V7.91602C17.1802 7.27102 16.6582 6.74902 16.0132 6.74902Z"
        stroke={stroke || theme.palette.color.primary}
        strokeWidth={1.167}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarViewIcon;
