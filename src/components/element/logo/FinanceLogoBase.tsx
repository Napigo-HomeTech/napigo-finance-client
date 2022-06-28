import React, { useCallback } from "react";
import { LogoProps, ScaleClassMap } from "./LogoConstant";

export const FinanceLogoBase: React.FC<LogoProps> = (props) => {
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
      onClick={handleClick}
      className={`${ScaleClassMap[scale]} ${type === "button" ? "cursor-pointer" : ""}`}
      width={63}
      height={69}
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
      <path
        d="M42.75 36.625h-7.5l-2.777-4.167A.937.937 0 0 1 33.252 31h11.496c.75 0 1.195.834.78 1.458l-2.778 4.167Zm-7.5 1.875h7.5c.223.147.475.31.709.492C46.834 41.12 54 45.702 54 55.375A5.626 5.626 0 0 1 48.375 61h-18.75A5.626 5.626 0 0 1 24 55.375c0-9.674 7.166-14.256 10.488-16.383.287-.181.54-.345.762-.492Zm4.928 5.625c0-.65-.528-1.178-1.23-1.178-.598 0-1.126.528-1.126 1.178v.352c-.328.07-.691.17-.931.298-.873.399-1.635 1.137-1.823 2.21-.105.597-.046 1.177.2 1.699.246.515.627.879 1.013 1.142.68.463 1.576.733 2.262.938l.129.035c.82.252 1.371.433 1.717.685.146.106.199.188.216.24.024.048.06.153.018.387-.035.205-.146.381-.469.516-.357.152-.937.228-1.687.111-.352-.058-.979-.27-1.535-.457-.13-.047-.258-.088-.375-.129a1.172 1.172 0 0 0-1.483.745c-.205.615.13 1.277.744 1.43.07.075.159.105.258.14.41.158 1.19.404 1.746.533v.375c0 .65.528 1.178 1.125 1.178.703 0 1.23-.528 1.23-1.178v-.322c.311-.059.616-.2.897-.27.926-.392 1.664-1.154 1.858-2.267.105-.61.058-1.196-.176-1.729a2.884 2.884 0 0 0-.99-1.195c-.71-.522-1.659-.803-2.368-1.02l-.1-.012c-.779-.251-1.341-.427-1.698-.673-.153-.106-.2-.176-.211-.205-.012-.024-.047-.094-.012-.293.023-.117.111-.31.48-.475.328-.17.961-.264 1.676-.205.258.094 1.049.246 1.277.305a1.165 1.165 0 0 0 1.43-.832 1.165 1.165 0 0 0-.832-1.43c-.258-.07-.843-.188-1.23-.258v-.369Z"
        fill="#33B099"
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
          <feMorphology radius={3.019} in="SourceAlpha" result="effect1_dropShadow_554_9292" />
          <feOffset dx={-4.744} dy={-4.744} />
          <feGaussianBlur stdDeviation={3.666} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_554_9292" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_554_9292" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
