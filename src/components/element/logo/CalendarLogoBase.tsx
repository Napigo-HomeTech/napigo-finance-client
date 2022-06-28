import React, { useCallback } from "react";
import { LogoProps, ScaleClassMap } from "./LogoConstant";

export const CalendarLogoBase: React.FC<LogoProps> = (props) => {
  const { scale = 10, type = "static", onClick } = props;

  const handleClick = useCallback(
    (ev: React.MouseEvent) => {
      if (type === "button") {
        onClick?.(ev);
        return;
      }
    },
    [type, onClick]
  );

  return (
    <svg
      {...props}
      onClick={handleClick}
      className={`${ScaleClassMap[scale]} ${type === "button" ? "cursor-pointer" : ""}`}
      width={63}
      height={69}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={46.144} height={69} rx={6.9} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M15.525 27.169a4.313 4.313 0 0 1 4.312-4.313h37.95A4.313 4.313 0 0 1 62.1 27.17v37.519A4.313 4.313 0 0 1 57.787 69H15.525V27.169Z"
          fill="#037C66"
        />
      </g>
      <path
        d="M47.75 36h-2.5v-2.5h-2.5V36h-7.5v-2.5h-2.5V36h-2.5a2.502 2.502 0 0 0-2.5 2.5V56c0 1.379 1.121 2.5 2.5 2.5h17.5c1.379 0 2.5-1.121 2.5-2.5V38.5c0-1.379-1.121-2.5-2.5-2.5ZM46.5 54.75H39v-7.5h7.5v7.5Zm1.25-12.5h-17.5v-2.5h17.5v2.5Z"
        fill="#30B099"
      />
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={89.623} y2={43.923} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <filter
          id="b"
          x={6.469}
          y={13.8}
          width={55.631}
          height={55.2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={3.019} in="SourceAlpha" result="effect1_dropShadow_555_9298" />
          <feOffset dx={-4.744} dy={-4.744} />
          <feGaussianBlur stdDeviation={3.666} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_555_9298" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_555_9298" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
