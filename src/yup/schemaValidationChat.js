import * as Yup from "yup";

export const schemaValidationChat = Yup.object({
  firstName: Yup.string()
    .max(40, "Maximum 40 symbols")
    .matches(/^\S*$/, "No spaces are allowed")
    .required("The first name is required"),
  secondName: Yup.string()
    .max(40, "Maximum 40 symbols")
    .matches(/^\S*$/, "No spaces are allowed")
    .required("The second name is required"),
});
