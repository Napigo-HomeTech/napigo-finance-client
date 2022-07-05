import React from "react";
import { LogoProps } from "./types";

export const NapigoLogoBase40: React.FC<LogoProps> = (props) => {
  const { buttonClass, handleClick } = props;

  return (
    <svg
      onClick={handleClick}
      className={`${buttonClass}`}
      width={36}
      height={39}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={26.081} height={39} rx={3.9} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M8.775 15.356a2.437 2.437 0 0 1 2.437-2.437h21.45a2.437 2.437 0 0 1 2.438 2.437v21.206A2.438 2.438 0 0 1 32.662 39H8.775V15.356Z"
          fill="#037C66"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={50.656} y2={24.826} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <filter
          id="b"
          x={3.656}
          y={7.8}
          width={31.444}
          height={31.2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.706} in="SourceAlpha" result="effect1_dropShadow_593_9310" />
          <feOffset dx={-2.681} dy={-2.681} />
          <feGaussianBlur stdDeviation={2.072} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_593_9310" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_593_9310" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
