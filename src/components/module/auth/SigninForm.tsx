import { Button, TextField, PasswordField } from "components/element";
import React from "react";
import { Link } from "react-router-dom";

export const SigninForm: React.FC = () => {
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
      <PasswordField name="credential-input" placeholder="Password" />

      <Button variant="block" text="Login" />
      <Link to="register">
        <Button variant="block" text="Sign up" color="ghost" />
      </Link>
    </form>
  );
};
