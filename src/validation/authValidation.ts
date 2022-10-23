import * as yup from "yup";

export const registerValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),
  passwordConfirm: yup
    .string()
    .required("password confirm is a required field")
    .min(8)
    .max(32)
    .oneOf([yup.ref("password")], "The passwords must be equals"),
});
