export type LogoType = "static" | "button";

export type LogoProps = {
  type?: LogoType;
  onClick?: (ev: React.MouseEvent) => void;
};
