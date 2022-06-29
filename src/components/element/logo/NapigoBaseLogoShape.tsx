import * as React from "react";
import { SVGProps } from "react";

export const NapigoBaseLogoShape = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} width={82} height={92} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y={0.889} width={60.931} height={91.111} rx={9.111} fill="url(#a)" />
    <g filter="url(#b)">
      <path
        d="M20.5 36.764a5.694 5.694 0 0 1 5.694-5.695h50.112A5.694 5.694 0 0 1 82 36.764v49.541A5.694 5.694 0 0 1 76.306 92H20.5V36.764Z"
        fill="#037C66"
      />
    </g>
    <path
      d="M63.243 54.161c-1.452 0-2.687-.508-3.704-1.525-1.017-1.017-1.525-2.252-1.525-3.705 0-1.452.508-2.687 1.525-3.704 1.017-1.017 2.252-1.525 3.704-1.525 1.453 0 2.688.508 3.705 1.525 1.016 1.017 1.525 2.252 1.525 3.704 0 1.453-.509 2.688-1.525 3.705-1.017 1.017-2.252 1.525-3.705 1.525ZM37.095 75.079c-.959 0-1.779-.34-2.461-1.023-.683-.683-1.025-1.504-1.025-2.463V50.675c0-.96.342-1.78 1.025-2.462.682-.683 1.502-1.025 2.461-1.025h17.607a8.87 8.87 0 0 0-.175 1.743c0 .582.058 1.163.175 1.744.203.93.537 1.793 1.002 2.592a8.903 8.903 0 0 0 1.7 2.114l-6.363 4.01-11.68-7.322c-.493-.32-.994-.334-1.502-.043-.51.29-.764.726-.764 1.307 0 .261.058.501.175.72.116.217.29.399.523.544l12.333 7.713c.29.175.595.262.915.262.32 0 .625-.087.915-.262l8.28-5.186a8.758 8.758 0 0 0 3.007.523c.93 0 1.845-.145 2.746-.435a8.15 8.15 0 0 0 2.484-1.308v15.689c0 .959-.341 1.78-1.023 2.463-.684.682-1.505 1.023-2.464 1.023h-27.89Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={0.889}
        x2={118.342}
        y2={58.887}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29AE96" />
        <stop offset={1} stopColor="#5AB8A7" />
      </linearGradient>
      <filter
        id="b"
        x={8.542}
        y={19.111}
        width={73.458}
        height={72.889}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius={3.986} in="SourceAlpha" result="effect1_dropShadow_578_9370" />
        <feOffset dx={-6.264} dy={-6.264} />
        <feGaussianBlur stdDeviation={4.84} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_578_9370" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_578_9370" result="shape" />
      </filter>
    </defs>
  </svg>
);
