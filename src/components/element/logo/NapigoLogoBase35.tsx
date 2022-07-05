import React from "react";
import { LogoProps } from "./types";

export const NapigoLogoBase35: React.FC<LogoProps> = (props) => {
  const { buttonClass, handleClick } = props;

  return (
    <svg
      onClick={handleClick}
      className={`${buttonClass}`}
      width={31}
      height={34}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={22.738} height={34} rx={3.4} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M7.65 13.387c0-1.173.951-2.125 2.125-2.125h18.7c1.173 0 2.125.952 2.125 2.125v18.488A2.125 2.125 0 0 1 28.475 34H7.65V13.387Z"
          fill="#037C66"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={44.162} y2={21.643} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <filter
          id="b"
          x={3.187}
          y={6.8}
          width={27.413}
          height={27.2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.488} in="SourceAlpha" result="effect1_dropShadow_526_9249" />
          <feOffset dx={-2.337} dy={-2.337} />
          <feGaussianBlur stdDeviation={1.806} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_526_9249" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_526_9249" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
