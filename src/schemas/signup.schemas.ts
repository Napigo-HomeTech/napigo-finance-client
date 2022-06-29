import joi from "joi";

export const SignUpSchema = joi.object({
  signup_email: joi.string().ruleset.email({ tlds: false }).rule({}).required().messages({
    "string.empty": "Email is required",
    "string.email": "Email is invalid",
  }),
  signup_password: joi
    .string()
    .ruleset.min(6)
    .rule({ message: "Please provide a valid password" })
    .required()
    .messages({ "string.empty": "Password is required" }),
  signup_confirm_password: joi
    .string()
    .ruleset.min(6)
    .rule({ message: "Please provide a valid password" })
    .required()
    .valid(joi.ref("signup_password"))
    .messages({
      "any.only": "Password not matched",
    }),
  signup_nickname: joi.string().min(3).required().messages({
    "string.empty": "Please provide your nick name",
    "string.min": "Your Nick name is too short",
  }),
});
