import { useTheme } from "@mui/material";
import * as React from "react";

const VuetraIcon = ({ fill, ...props }) => {
  const theme = useTheme();
  return (
    <svg
      width="70"
      height="16"
      viewBox="0 0 70 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_627_1792)">
        <path
          d="M2.136 3.65195L6.405 13.862L10.701 3.65195H12.709L7.702 15.525H5.007L0 3.65195H2.136ZM18.81 15.904C17.217 15.904 16.048 15.517 15.303 14.741C14.556 13.965 14.183 12.794 14.183 11.227V3.65195H16.216V11.013C16.216 12.263 16.483 13.13 17.018 13.613C17.551 14.096 18.343 14.337 19.394 14.337C20.715 14.337 21.736 13.803 22.457 12.735C23.177 11.665 23.537 10.15 23.537 8.18795V3.65295H25.571V15.525H23.537V12.533C22.725 14.781 21.149 15.905 18.81 15.904ZM34.213 15.904C32.129 15.904 30.557 15.323 29.498 14.159C28.439 12.996 27.909 11.464 27.909 9.56495C27.889 8.44895 28.133 7.34495 28.621 6.33595C29.085 5.39595 29.829 4.61495 30.755 4.09195C31.705 3.54695 32.857 3.27395 34.213 3.27395C35.333 3.24595 36.442 3.50295 37.428 4.02095C38.315 4.49995 39.033 5.22795 39.487 6.11095C39.968 7.06695 40.208 8.12095 40.187 9.18595C40.192 9.46395 40.175 9.74095 40.135 10.016H29.917C29.985 11.584 30.396 12.716 31.151 13.412C31.904 14.109 32.95 14.457 34.289 14.457C36.526 14.457 37.865 13.594 38.305 11.868H40.161C39.996 12.983 39.406 13.996 38.508 14.706C37.559 15.505 36.128 15.905 34.213 15.904ZM38.204 8.59195C38.102 6.01195 36.78 4.72195 34.238 4.72095C32.984 4.72095 31.993 5.02995 31.265 5.64695C30.536 6.26495 30.104 7.24595 29.968 8.59195H38.204ZM45.174 15.588C44.625 15.588 44.238 15.483 44.014 15.272C43.789 15.061 43.677 14.713 43.677 14.226V4.25495H41.256V3.54995L43.751 3.42795L43.951 0.850952H44.675V3.42795H49.043V4.25495H44.675V14.761H49.043V15.588H45.174ZM51.713 3.42795H52.711V7.39295C53.443 4.68495 55.082 3.33095 57.628 3.33095H58.227V4.35295L57.877 4.32795C57.712 4.30895 57.545 4.30095 57.378 4.30395C55.581 4.30395 54.354 4.96495 53.697 6.28595C53.04 7.60695 52.711 9.32195 52.711 11.43V15.588H51.713V3.42795ZM63.343 15.904C62.195 15.904 61.23 15.617 60.448 15.041C59.666 14.465 59.275 13.61 59.275 12.475C59.275 11.47 59.587 10.672 60.211 10.08C60.835 9.48795 61.787 9.08695 63.069 8.87595L66.338 8.34095C67.12 8.21095 67.661 8.03695 67.96 7.81795C68.26 7.59895 68.41 7.22995 68.41 6.71195C68.41 5.85195 68.135 5.16295 67.586 4.64495C67.037 4.12595 66.072 3.86595 64.691 3.86595C63.227 3.86595 62.187 4.18195 61.571 4.81495C60.955 5.44695 60.606 6.26595 60.523 7.27095H59.574C59.658 5.95795 60.136 4.91995 61.01 4.15795C61.883 3.39595 63.11 3.01495 64.691 3.01495C66.305 3.01495 67.474 3.33895 68.197 3.98795C68.921 4.63595 69.283 5.51995 69.283 6.63895V12.11C69.283 13.083 69.35 14.242 69.483 15.588H68.584C68.451 14.259 68.385 13.237 68.385 12.524C68.085 13.416 67.544 14.202 66.762 14.883C65.98 15.564 64.841 15.904 63.343 15.904ZM60.323 12.475C60.323 13.335 60.61 13.979 61.184 14.409C61.758 14.838 62.511 15.053 63.443 15.053C64.575 15.053 65.51 14.798 66.251 14.287C66.991 13.777 67.536 13.14 67.885 12.378C68.235 11.616 68.41 10.854 68.41 10.092V8.43795C68.121 8.61195 67.816 8.75795 67.499 8.87595C67.191 8.98895 66.729 9.09495 66.113 9.19195L63.343 9.65395C62.312 9.83195 61.551 10.141 61.06 10.578C60.569 11.016 60.323 11.648 60.323 12.475Z"
          fill={fill || theme.palette.color.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_627_1792">
          <rect width="70" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VuetraIcon;