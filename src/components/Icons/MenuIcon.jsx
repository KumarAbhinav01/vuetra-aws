import React from "react";

const MenuIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "6px" }}
    >
      <path
        d="M6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        stroke={color || "currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.75 6h8.5m-8.5 6h8.5m-8.5 6h8.5"
        stroke={color || "currentColor"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
