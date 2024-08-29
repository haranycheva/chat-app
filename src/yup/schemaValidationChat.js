import * as Yup from "yup";

export const schemaValidationChat = Yup.object({
    firstName: Yup.string()
      .matches(/^\S*$/, "No spaces are allowed")
      .required("The first name is required"),
    secondName: Yup.string()
      .matches(/^\S*$/, "No spaces are allowed")
      .required("The second name is required"),
  });