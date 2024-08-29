import * as Yup from "yup";

export const schemaValidationMessage = Yup.object({
    message: Yup.string().trim().required(),
  });