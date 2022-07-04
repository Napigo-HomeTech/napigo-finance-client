import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const FinanceLogoBase30: React.FC<LogoProps> = (props) => {
  const { type = "static", onClick } = props;

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
      className={`${type === "button" ? "cursor-pointer" : ""}`}
      width={28}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={20.106} height={30.065} rx={3.007} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M6.765 11.838A1.88 1.88 0 0 1 8.644 9.96H25.18a1.88 1.88 0 0 1 1.879 1.88v16.347a1.88 1.88 0 0 1-1.88 1.88H6.766V11.837Z"
          fill="#037C66"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          d="M18.628 15.959H15.36l-1.21-1.816a.408.408 0 0 1 .339-.635h5.01c.326 0 .52.363.339.635l-1.21 1.816Zm-3.268.817h3.268c.096.063.206.135.308.214 1.471.927 4.593 2.923 4.593 7.139a2.452 2.452 0 0 1-2.45 2.45h-8.17a2.451 2.451 0 0 1-2.452-2.45c0-4.216 3.123-6.212 4.57-7.139.126-.08.236-.15.333-.214Zm2.147 2.45a.519.519 0 0 0-.537-.513c-.26 0-.49.23-.49.514v.153c-.143.03-.301.074-.406.13-.38.173-.712.495-.794.962-.046.26-.02.514.087.74.107.226.273.384.442.499.296.201.687.319.985.408l.056.015c.358.11.598.19.749.3.063.045.086.08.094.104.01.02.025.066.008.168-.016.09-.064.166-.205.225-.155.066-.408.1-.735.049-.153-.026-.426-.118-.669-.2l-.163-.056a.51.51 0 0 0-.646.325.478.478 0 0 0 .324.623c.03.033.07.045.113.06.178.07.518.177.76.233v.163c0 .284.23.514.49.514.307 0 .537-.23.537-.514v-.14c.135-.026.268-.087.39-.117.404-.171.725-.503.81-.988.046-.266.025-.521-.077-.754-.1-.23-.26-.398-.431-.52-.31-.228-.723-.35-1.032-.445l-.043-.005c-.34-.11-.585-.186-.74-.293-.067-.046-.087-.077-.093-.09-.005-.01-.02-.04-.005-.127.01-.052.049-.136.21-.207.143-.074.418-.115.73-.09.112.041.457.108.556.133.271.074.552-.09.623-.362a.508.508 0 0 0-.362-.623 8.637 8.637 0 0 0-.536-.113v-.16Z"
          fill="#33B099"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={39.051} y2={19.139} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <clipPath id="c">
          <path fill="#fff" transform="translate(10.457 13.508)" d="M0 0h13.072v13.072H0z" />
        </clipPath>
        <filter
          id="b"
          x={2.819}
          y={6.013}
          width={24.24}
          height={24.052}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.315} in="SourceAlpha" result="effect1_dropShadow_599_9383" />
          <feOffset dx={-2.067} dy={-2.067} />
          <feGaussianBlur stdDeviation={1.597} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_599_9383" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_599_9383" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
