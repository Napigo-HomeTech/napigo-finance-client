import { Button, Checkbox, TextField } from "components/element";
import React, { useState } from "react";

export const SigninForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const principalEl = document.getElementById("principal-input") as HTMLInputElement;
    const credentialEl = document.getElementById("credential-input") as HTMLInputElement;

    /** TODO : Submit Logic */
    console.log({
      principal: principalEl.value,
      credential: credentialEl.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextField
        placeholder="Username / Email"
        name="principal-input"
        autoComplete={"off"}
        spellCheck={false}
        autoFocus={true}
      />

      <TextField
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="credential-input"
      />
      <div className="flex flex-row justify-end">
        <Checkbox
          label="Show Password"
          color="base"
          onChange={(ev) => setShowPassword(ev.target.checked)}
        />
      </div>
      <Button variant="block" text="Login" />
      <Button variant="block" text="Sign up" color="ghost" />
    </form>
  );
};
