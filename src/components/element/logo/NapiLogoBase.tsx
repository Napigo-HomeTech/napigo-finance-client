import React, { useCallback } from "react";
import { LogoProps, ScaleClassMap } from "./LogoConstant";

export const NapigoLogoBase: React.FC<LogoProps> = (props) => {
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
      width={63}
      height={69}
      onClick={handleClick}
      className={`${ScaleClassMap[scale]} ${type === "button" ? "cursor-pointer" : ""}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={46.144} height={69} rx={6.9} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M15.525 27.169a4.313 4.313 0 0 1 4.312-4.313h37.95A4.313 4.313 0 0 1 62.1 27.17v37.519A4.313 4.313 0 0 1 57.787 69H15.525V27.169Z"
          fill="#037C66"
        />
      </g>
      <mask
        id="c"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={25}
        y={32}
        width={27}
        height={27}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.833 38.25a2.417 2.417 0 1 0 0-4.833 2.417 2.417 0 0 0 0 4.833v0Zm1.209 18.125a3.625 3.625 0 1 0 0-7.25 3.625 3.625 0 0 0 0 7.25v0Zm16.916 1.208a3.625 3.625 0 1 0 0-7.25 3.625 3.625 0 0 0 0 7.25Zm-9.666-9.666a4.833 4.833 0 1 0 0-9.667 4.833 4.833 0 0 0 0 9.667v0Zm7.25-9.667a2.417 2.417 0 1 0 0-4.833 2.417 2.417 0 0 0 0 4.833v0Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={2.417}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m30.646 37.646 2.416 2.416m9.063-1.812-1.208 1.208m3.625 11.782-3.625-4.532m-8.459 3.021 2.417-2.417"
          stroke="#fff"
          strokeWidth={2.417}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#c)">
        <path d="M24 31h29v29H24V31Z" fill="#32B099" />
      </g>
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
          <feMorphology radius={3.019} in="SourceAlpha" result="effect1_dropShadow_553_9286" />
          <feOffset dx={-4.744} dy={-4.744} />
          <feGaussianBlur stdDeviation={3.666} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_553_9286" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_553_9286" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
