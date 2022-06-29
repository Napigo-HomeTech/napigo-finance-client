import React, { useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { TextField } from "./TextField";

type PasswordFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  visibleToggleEnable?: boolean;
};
export const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const { name, placeholder, label, visibleToggleEnable = true } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  if (!visibleToggleEnable) {
    return <TextField type={"password"} placeholder={placeholder} label={label} name={name} />;
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <TextField
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        label={label}
        name={name}
      />
      <div className="flex flex-row justify-end">
        <Checkbox
          label="Show Password"
          color="base"
          onChange={(ev) => setShowPassword(ev.target.checked)}
        />
      </div>
    </div>
  );
};
