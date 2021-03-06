import React, { ReactElement, useMemo } from "react";

const ButtonColorClassMap = {
  base: "border-tranparent hover:bg-primary",
  primary: "btn-primary text-primary-content",
  secondary: "btn-secondary text-secondary-content",
  accent: "btn-accent text-accent-content",
  info: "btn-info text-info-content",
  warning: "btn-warning text-warning-content",
  success: "btn-success text-success-content",
  error: "btn-error text-error-content",
  ghost: "btn-ghost",
  "ghost-primary": "btn-ghost text-primary active:border-primary",
  "ghost-secondary": "btn-ghost text-secondary active:border-secondary",
  "ghost-accent": "btn-ghost text-accent active:border-accent",
  "ghost-success": "btn-ghost text-success active:border-success",
  "ghost-info": "btn-ghost text-info active:border-info",
  "ghost-warning": "btn-ghost text-warning active:border-warning",
  "ghost-error": "btn-ghost text-error active:border-error",
};
const ButtonVariantClassMap = {
  normal: "",
  square: "btn-square",
  block: "btn-block",
};
const ButtonSizeClassMap = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};
const ContentAlignMentClassMap = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};
type Sizing = "sm" | "md" | "lg";
type IconPosition = "left" | "right";
type ContentAlignment = "right" | "center" | "left";

type Color =
  | "base"
  | "primary"
  | "accent"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "ghost-primary"
  | "ghost-secondary"
  | "ghost-accent"
  | "ghost-success"
  | "ghost-info"
  | "ghost-warning"
  | "ghost-error";

type Variant = "square" | "normal" | "block";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  textUpperCase?: boolean;
  size?: Sizing;
  color?: Color;
  outline?: boolean;
  renderIcon?: () => JSX.Element | ReactElement;
  iconPosition?: IconPosition;
  variant?: Variant;
  contentAlignment?: ContentAlignment;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    textUpperCase = true,
    size = "md",
    color = "primary",
    outline = false,
    renderIcon = () => {},
    iconPosition = "left",
    variant = "normal",
    contentAlignment = "center",
    className,
    loading = false,
    ...buttonProps
  } = props;

  const classes = useMemo(() => {
    return `btn gap-2 ${textUpperCase ? "uppercase" : ""} ${outline ? "btn-outline" : ""} ${
      ButtonSizeClassMap[size]
    } ${ButtonColorClassMap[color]} ${ButtonVariantClassMap[variant]} ${
      ContentAlignMentClassMap[contentAlignment]
    } ${className} ${loading ? "loading" : ""}`;
  }, [outline, textUpperCase, size, color, variant, contentAlignment, loading, className]);

  return (
    <button {...buttonProps} className={classes}>
      <>
        {iconPosition === "left" && renderIcon()}
        {text}
        {iconPosition === "right" && renderIcon()}
      </>
    </button>
  );
};
