import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const FinanceLogoBase35: React.FC<LogoProps> = (props) => {
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
      width={32}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={23.457} height={35.076} rx={3.508} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M7.892 13.811c0-1.21.982-2.192 2.192-2.192h19.292c1.211 0 2.193.982 2.193 2.192v19.073c0 1.21-.982 2.192-2.193 2.192H7.892V13.811Z"
          fill="#037C66"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          d="M21.732 18.618h-3.813L16.507 16.5a.476.476 0 0 1 .397-.741h5.844c.381 0 .607.424.396.741l-1.412 2.118Zm-3.813.954h3.813c.113.074.241.157.36.25 1.716 1.081 5.359 3.41 5.359 8.328a2.86 2.86 0 0 1-2.86 2.86H15.06a2.86 2.86 0 0 1-2.86-2.86c0-4.918 3.643-7.247 5.332-8.328.146-.093.274-.176.387-.25Zm2.505 2.859c0-.33-.268-.599-.625-.599-.304 0-.572.268-.572.599v.179a1.965 1.965 0 0 0-.474.152c-.443.202-.83.578-.926 1.123-.054.303-.024.598.101.863.125.262.319.447.516.581.345.235.8.373 1.15.477l.065.018c.417.128.697.22.873.348.074.054.1.095.11.122.012.024.03.078.009.197-.018.104-.075.194-.238.262-.182.077-.477.116-.858.057-.18-.03-.498-.137-.78-.233-.066-.024-.132-.044-.191-.065a.596.596 0 0 0-.754.378c-.104.313.066.65.378.727.036.038.08.053.131.071.209.08.605.206.888.271v.191c0 .33.268.599.572.599.357 0 .625-.268.625-.599v-.164c.158-.03.313-.101.456-.137.47-.2.846-.587.944-1.153.054-.31.03-.607-.089-.878a1.466 1.466 0 0 0-.503-.608c-.36-.265-.843-.408-1.204-.518l-.05-.006c-.397-.128-.683-.218-.864-.343-.078-.053-.102-.09-.107-.104-.006-.012-.024-.048-.006-.149.011-.06.056-.158.244-.241.167-.087.488-.134.852-.104.13.047.533.125.65.154a.592.592 0 0 0 .726-.422.592.592 0 0 0-.423-.727 10.069 10.069 0 0 0-.626-.131v-.188Z"
          fill="#33B099"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={45.56} y2={22.328} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <clipPath id="c">
          <path fill="#fff" transform="translate(12.2 15.759)" d="M0 0h15.251v15.251H0z" />
        </clipPath>
        <filter
          id="b"
          x={3.288}
          y={7.015}
          width={28.28}
          height={28.061}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.535} in="SourceAlpha" result="effect1_dropShadow_595_9337" />
          <feOffset dx={-2.411} dy={-2.411} />
          <feGaussianBlur stdDeviation={1.863} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_595_9337" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_595_9337" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
