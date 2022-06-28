export const ScaleClassMap = {
  1: "scale-[10%]",
  2: "scale-[20%]",
  3: "scale-[30%]",
  4: "scale-[40%]",
  5: "scale-[50%]",
  6: "scale-[60%]",
  7: "scale-[70%]",
  8: "scale-[80%]",
  9: "scale-[90%]",
  10: "scale-[100%]",
};

export type Scale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type LogoType = "static" | "button";

export type LogoProps = {
  // This represent the scale in percentage format
  scale?: Scale;
  type?: LogoType;
  onClick?: (ev: React.MouseEvent) => void;
};
