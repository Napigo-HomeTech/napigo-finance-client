import React, { useCallback } from "react";
import { LogoProps } from "./LogoConstant";

export const FinanceLogoBase40: React.FC<LogoProps> = (props) => {
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
      onClick={handleClick}
      className={`${type === "button" ? "cursor-pointer" : ""}`}
      width={37}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={26.799} height={40.074} rx={4.007} fill="url(#a)" />
      <g filter="url(#b)">
        <path
          d="M9.017 15.78a2.505 2.505 0 0 1 2.504-2.505h22.041a2.505 2.505 0 0 1 2.505 2.504v21.79a2.505 2.505 0 0 1-2.505 2.505H9.017V15.78Z"
          fill="#037C66"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          d="M24.828 21.271h-4.355l-1.613-2.42a.544.544 0 0 1 .452-.847h6.677c.435 0 .694.485.453.847l-1.614 2.42Zm-4.355 1.09h4.355c.13.084.276.18.412.285 1.96 1.235 6.122 3.896 6.122 9.515a3.268 3.268 0 0 1-3.267 3.267h-10.89a3.267 3.267 0 0 1-3.266-3.267c0-5.619 4.162-8.28 6.091-9.515.167-.105.313-.2.442-.286Zm2.861 3.266c0-.378-.306-.684-.714-.684-.347 0-.654.306-.654.684v.204c-.19.041-.401.099-.54.174-.508.231-.95.66-1.059 1.283-.061.347-.027.684.116.987.143.3.364.51.588.663.395.269.916.426 1.314.545l.075.02c.476.146.796.252.997.398.085.061.116.11.126.14.014.027.034.088.01.224-.02.12-.085.222-.272.3-.208.088-.545.133-.98.064-.204-.034-.569-.156-.892-.265-.075-.027-.15-.051-.218-.075a.68.68 0 0 0-.86.432c-.12.358.074.742.432.83.04.045.091.062.15.082.238.092.69.235 1.014.31v.218c0 .378.306.684.653.684.408 0 .714-.306.714-.684v-.187c.18-.034.358-.116.521-.157.538-.228.967-.67 1.079-1.317a1.727 1.727 0 0 0-.102-1.004 1.674 1.674 0 0 0-.575-.694c-.412-.303-.963-.466-1.375-.592l-.058-.007c-.453-.146-.78-.248-.987-.391-.088-.062-.116-.102-.122-.12-.007-.013-.028-.054-.007-.17.013-.067.065-.18.279-.275.19-.099.558-.153.973-.12.15.055.61.144.742.178.36.098.735-.12.83-.483a.677.677 0 0 0-.483-.83 11.5 11.5 0 0 0-.715-.15v-.215Z"
          fill="#33B099"
        />
      </g>
      <defs>
        <linearGradient id="a" x1={0} y1={0} x2={52.051} y2={25.51} gradientUnits="userSpaceOnUse">
          <stop stopColor="#29AE96" />
          <stop offset={1} stopColor="#5AB8A7" />
        </linearGradient>
        <clipPath id="c">
          <path fill="#fff" transform="translate(13.939 18.004)" d="M0 0h17.424v17.424H0z" />
        </clipPath>
        <filter
          id="b"
          x={3.757}
          y={8.015}
          width={32.31}
          height={32.059}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius={1.753} in="SourceAlpha" result="effect1_dropShadow_595_9349" />
          <feOffset dx={-2.755} dy={-2.755} />
          <feGaussianBlur stdDeviation={2.129} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_595_9349" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_595_9349" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
