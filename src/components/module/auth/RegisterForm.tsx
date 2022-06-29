import { Button, PasswordField } from "components/element";
import { TextField } from "components/element/text-input/TextField";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpSchema } from "schemas/signup.schemas";
import { freezePage } from "utils";
import { AuthFormState } from "./type";
import { authClient } from "../../../services/supabase.services";

/**
 *
 */
const SignupInputIds = {
  email: "signup_email",
  password: "signup_password",
  confirm_password: "signup_confirm_password",
  nickname: "signup_nickname",
};

export const RegisterForm: React.FC = () => {
  const { submit, inputError, formState } = useRegisterForm();

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <TextField
        placeholder="Email Address"
        name={SignupInputIds.email}
        autoComplete={"off"}
        spellCheck={false}
        autoFocus
        error={inputError[SignupInputIds.email] !== undefined}
        errorText={inputError[SignupInputIds.email]}
      />
      <PasswordField
        name={SignupInputIds.password}
        placeholder="Password"
        visibleToggleEnable={false}
        error={inputError[SignupInputIds.password] !== undefined}
        errorText={inputError[SignupInputIds.password]}
      />
      <PasswordField
        name={SignupInputIds.confirm_password}
        placeholder="Confirm Password"
        visibleToggleEnable={false}
        error={inputError[SignupInputIds.confirm_password] !== undefined}
        errorText={inputError[SignupInputIds.confirm_password]}
      />
      <TextField
        placeholder="Enter Nickname"
        label="How Shall We Address You ?"
        name={SignupInputIds.nickname}
        error={inputError[SignupInputIds.nickname] !== undefined}
        errorText={inputError[SignupInputIds.nickname]}
      />

      <Button type="submit" color="primary" text="Register" loading={formState === "submitting"} />
      <Link to="/auth">
        <Button type="button" color="ghost" text="Back To Login" variant="block" />
      </Link>
    </form>
  );
};

/**
 * Hook applicable for Signup form component
 */
const useRegisterForm = () => {
  const [formState, setFormState] = useState<AuthFormState>("idle");
  const [inputError, setInputError] = useState<{ [k: string]: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const navigate = useNavigate();

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const formElements: { [k: string]: HTMLInputElement } = {
      signup_nickname: document.getElementById(SignupInputIds.nickname) as HTMLInputElement,
      signup_email: document.getElementById(SignupInputIds.email) as HTMLInputElement,
      signup_password: document.getElementById(SignupInputIds.password) as HTMLInputElement,
      signup_confirm_password: document.getElementById(
        SignupInputIds.confirm_password
      ) as HTMLInputElement,
    };

    const formData: { [k: string]: string } = {};

    Object.keys(formElements).forEach((key: string) => {
      formData[key] = (formElements[key] as HTMLInputElement).value;
    });

    // eslint-disable-next-line
    const { error, value } = SignUpSchema.validate(formData);

    if (error) {
      // Handle input errors and return without submitting
      const err = error?.details[0];
      const errPath = err?.path[0] as string;
      setInputError({ [errPath]: err?.message });
      return;
    }

    const canSubmit = Boolean(formState === "idle" || formState === "onerror");
    if (canSubmit) {
      // Can proceed with Sign up
      setInputError({});
      setFormState("submitting");
      freezePage(true);

      const { user, session, error } = await authClient.signUp(
        {
          email: value[SignupInputIds.email],
          password: value[SignupInputIds.password],
        },
        {
          data: {
            nickname: value[SignupInputIds.nickname],
          },
        }
      );
      setTimeout(() => {
        freezePage(false);
        setFormState("onerror");

        if (error) {
          setSubmitError(error.message);
          setFormState("onerror");
          return;
        }
        // Clear all current session and force user to Login once Email is confirmed
        if (user && session) {
          authClient.signOut();
        }

        navigate("/auth/confirm-email-pending", {
          state: {
            fromRegistration: true,
          },
        });
      }, 3000);
    }
  };

  return {
    submit,
    formState,
    inputError,
    submitError,
  };
};
