import React from "react";
import { FaAsterisk } from "react-icons/fa";

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
  error?: boolean;
  errorText?: string;
  required?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    name,
    label,
    sizing = "md",
    className,
    contentEditable,
    editable = true,
    error = false,
    errorText,
    required = false,
    ...inputProps
  } = props;

  const toDisplayLabelRow = Boolean(label || required);

  return (
    <div className="form-control w-full">
      {toDisplayLabelRow && (
        <label className="label" htmlFor={name}>
          {label && <span className="label-text">{label}</span>}
          {required && (
            <span className="label-text-alt text-error">
              <FaAsterisk size={7} />
            </span>
          )}
        </label>
      )}

      <input
        {...inputProps}
        id={name}
        className={`input bg-base-200 ${InputSizeClassMap[sizing]} ${
          editable ? "" : "pointer-events-none"
        } ${error ? "border-error focus:outline-error" : ""} `}
      />
      {error && errorText && (
        <label className="label">
          <span className="label-text-alt text-error">{errorText}</span>
        </label>
      )}
    </div>
  );
};
