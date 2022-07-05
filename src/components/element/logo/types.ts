import React, { ReactNode } from "react";

export type LogoType = "static" | "button";

export type LogoContainerProps = {
  type?: LogoType;
  onClick?: (ev: React.MouseEvent) => void;
  children: ReactNode;
};

export type LogoProps = {
  handleClick?: (ev: React.MouseEvent) => void;
  buttonClass?: string;
};
