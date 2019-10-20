import * as Yup from "yup";

const all = Yup.object().shape({
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
  email: Yup.string()
    .email({ minDomainSegments: 2 })
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null, "Password must be match"])
    .required("Password must be match"),
  city: Yup.string().required("please add your city"),
  isAgree: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions")
});

const email = Yup.string()
  .email("you should enter valid email")
  .required();

const password = Yup.string()
  .matches(/^[a-zA-Z0-9]{5,30}$/)
  .required();

const confirmPassword = Yup.object({
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .required("Password confirm is required")
});

const city = Yup.string()
  .trim()
  .required();

export default { email, password, confirmPassword, city, all };
