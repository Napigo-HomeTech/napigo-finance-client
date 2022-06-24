import React from "react";

const InputSizeClassMap = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

type Sizing = "xs" | "sm" | "md" | "lg";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  sizing?: Sizing;
  label?: string;
  editable?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    name,
    label,
    sizing = "md",
    className,
    contentEditable,
    editable = true,
    ...inputProps
  } = props;
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label" htmlFor={name}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        {...inputProps}
        id={name}
        className={`input bg-base-200 ${InputSizeClassMap[sizing]} ${
          editable ? "" : "pointer-events-none"
        } `}
      />
    </div>
  );
};
