import { Button, PasswordField } from "components/element";
import { TextField } from "components/element/text-input/TextField";
import React from "react";
import { Link } from "react-router-dom";

export const RegisterForm: React.FC = () => {
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
        placeholder="Enter Nickname"
        label="How Shall We Address You ?"
        name={"nickname-input"}
        autoFocus
      />
      <TextField
        placeholder="Email Address"
        name="principal-input"
        autoComplete={"off"}
        spellCheck={false}
      />
      <PasswordField name="password-input" placeholder="Password" visibleToggleEnable={false} />
      <PasswordField
        name="password-confirm-input"
        placeholder="Confirm Password"
        visibleToggleEnable={false}
      />

      <Button type="submit" color="primary" text="Register" />
      <Link to="/auth">
        <Button type="button" color="ghost" text="Back To Login" variant="block" />
      </Link>
    </form>
  );
};
