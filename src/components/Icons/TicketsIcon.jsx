import React from "react";

const TicketIcon = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      style={{ marginRight: "6px" }}
    >
      <path
        d="M 8.25 5.75 L 5.75 5.75 C 5.198 5.75 4.75 6.198 4.75 6.75 L 4.75 12.25 M 14.82 8.717 C 13.034 7.643 14.247 5.454 14.247 5.454 L 13.301 4.886 C 13.078 4.753 12.81 4.717 12.559 4.787 C 12.309 4.857 12.098 5.026 11.976 5.256 L 6.88 14.448 C 6.611 14.929 6.767 15.537 7.235 15.829 L 12.699 19.114 C 12.922 19.247 13.19 19.283 13.441 19.213 C 13.691 19.143 13.902 18.974 14.024 18.744 L 19.12 9.552 C 19.389 9.071 19.233 8.463 18.765 8.171 L 17.819 7.602 C 17.819 7.602 16.606 9.792 14.819 8.717 Z"
        fill="transparent"
        stroke-width="1.5"
        stroke={color || "rgb(138, 150, 166)"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray=""
      ></path>
    </svg>
  );
};

export default TicketIcon;
