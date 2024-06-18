import * as React from "react";
import { useTheme } from "@mui/material";

const OrdersIcon = ({ strokeColor, ...props }) => {
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
      <path
        d="M4.7501 8.75V8C4.63832 8.00006 4.52796 8.0251 4.4271 8.0733C4.32624 8.1215 4.23743 8.19164 4.16717 8.27858C4.0969 8.36553 4.04696 8.46708 4.021 8.5758C3.99503 8.68453 3.9937 8.79769 4.01711 8.907L4.7501 8.75ZM19.2501 8.75L19.9831 8.907C20.0065 8.79769 20.0052 8.68453 19.9792 8.5758C19.9532 8.46708 19.9033 8.36553 19.833 8.27858C19.7628 8.19164 19.674 8.1215 19.5731 8.0733C19.4723 8.0251 19.3619 8.00006 19.2501 8V8.75ZM4.7501 9.5H19.2501V8H4.7501V9.5ZM18.5171 8.593L16.6051 17.512L18.0721 17.826L19.9831 8.907L18.5171 8.593ZM15.3831 18.5H8.6171V20H15.3831V18.5ZM7.3951 17.512L5.4831 8.592L4.01711 8.907L5.9271 17.827L7.3951 17.512ZM8.6171 18.5C8.33113 18.4999 8.05382 18.4018 7.83144 18.222C7.60905 18.0422 7.45505 17.7916 7.3951 17.512L5.9281 17.826C6.05992 18.4413 6.39879 18.9929 6.88816 19.3885C7.37753 19.7842 7.9878 20 8.6171 20V18.5ZM16.6051 17.512C16.5452 17.7916 16.3912 18.0422 16.1688 18.222C15.9464 18.4018 15.6691 18.4999 15.3831 18.5V20C16.0126 20.0002 16.6231 19.7845 17.1127 19.3888C17.6022 18.9932 17.9403 18.4415 18.0721 17.826L16.6051 17.512Z"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.28792 8.26302C7.22506 8.45186 7.2398 8.65793 7.32888 8.8359C7.41796 9.01387 7.57409 9.14917 7.76292 9.21202C7.95176 9.27488 8.15782 9.26015 8.3358 9.17107C8.51377 9.08199 8.64906 8.92586 8.71192 8.73702L7.28792 8.26302ZM9.96192 4.98702C9.99304 4.89352 10.0054 4.79481 9.99842 4.69651C9.99139 4.59822 9.96507 4.50227 9.92097 4.41415C9.87686 4.32602 9.81582 4.24745 9.74135 4.18292C9.66688 4.11838 9.58042 4.06915 9.48692 4.03802C9.39342 4.0069 9.2947 3.9945 9.19641 4.00152C9.09812 4.00855 9.00217 4.03487 8.91405 4.07898C8.82592 4.12309 8.74735 4.18412 8.68281 4.25859C8.61828 4.33307 8.56904 4.41952 8.53792 4.51302L9.96192 4.98702ZM8.71192 8.73702L9.96192 4.98702L8.53792 4.51302L7.28792 8.26302L8.71192 8.73702ZM15.2889 8.73702C15.3191 8.83167 15.3677 8.91938 15.432 8.99508C15.4963 9.07077 15.575 9.13294 15.6636 9.17796C15.7521 9.22299 15.8487 9.24998 15.9478 9.25737C16.0468 9.26476 16.1463 9.2524 16.2406 9.22101C16.3348 9.18962 16.4219 9.13983 16.4967 9.07451C16.5716 9.0092 16.6327 8.92968 16.6765 8.84055C16.7204 8.75143 16.7461 8.65448 16.7522 8.55534C16.7582 8.4562 16.7446 8.35683 16.7119 8.26302L15.2889 8.73702ZM15.4609 4.51302C15.4327 4.41617 15.3852 4.32601 15.3213 4.24795C15.2574 4.16988 15.1784 4.10551 15.089 4.05869C14.9996 4.01187 14.9017 3.98355 14.8012 3.97545C14.7006 3.96734 14.5995 3.97961 14.5037 4.01151C14.408 4.04341 14.3198 4.0943 14.2442 4.16112C14.1686 4.22794 14.1073 4.30933 14.0639 4.4004C14.0205 4.49148 13.9959 4.59038 13.9916 4.69117C13.9873 4.79197 14.0034 4.89259 14.0389 4.98702L15.4609 4.51302ZM16.7119 8.26302L15.4609 4.51302L14.0389 4.98702L15.2889 8.73702L16.7119 8.26302Z"
        stroke={strokeColor || theme.palette.primary.main} // Dynamic stroke color
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OrdersIcon;