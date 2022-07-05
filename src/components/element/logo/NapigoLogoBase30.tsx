import React from "react";
import { LogoProps } from "./types";

export const NapigoLogoBase30: React.FC<LogoProps> = (props) => {
  const { buttonClass, handleClick } = props;

  return (
    <svg
      onClick={handleClick}
      className={`${buttonClass}`}
      width={27}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={20.063} height={30} rx={3} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M6.75 11.813c0-1.036.84-1.876 1.875-1.876h16.5c1.035 0 1.875.84 1.875 1.876v16.312C27 29.16 26.16 30 25.125 30H6.75V11.812Z"
          fill="#037C66"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={38.966} y2={19.097} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <filter
          id="b"
          x={2.813}
          y={6}
          width={24.188}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.313} in="SourceAlpha" result="effect1_dropShadow_597_9372" />
          <feOffset dx={-2.063} dy={-2.063} />
          <feGaussianBlur stdDeviation={1.594} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_597_9372" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_597_9372" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
