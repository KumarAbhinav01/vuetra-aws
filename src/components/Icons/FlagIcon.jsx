import React from "react";

const FlagIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      style={{ marginRight: "6px" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 4.75v14.5m0-4s2.25-2 7.25-2S19.25 10 19.25 10L4.75 4.75v10.5Z"
        stroke={color || "currentColor"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FlagIcon;
