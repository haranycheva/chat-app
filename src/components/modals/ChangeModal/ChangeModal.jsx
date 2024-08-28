import { ErrorMessage, Field, Form, Formik } from "formik";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import "./ChangeModal.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editMessage } from "../../../fetch";

const schemaValidation = Yup.object({
  text: Yup.string().trim().required(),
});

function ChangeModal({ thingToInteract, onClose, chatId, type }) {
  const dispatch = useDispatch();
  return (
    <ModalWrapper onClose={onClose}>
      <Formik
        initialValues={{ text: thingToInteract.text }}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            editMessage({ text: values.text, chatId, message: thingToInteract })
          );
          onClose();
          resetForm({ text: "" });
        }}
        validationSchema={schemaValidation}
      >
        {({ errors }) => (
          <Form className="change__form">
            <h2 className="title">Edit Message</h2>
            <div className="change__input-wrapp">
              <Field
                className={`${errors.text ? "error" : ""} input`}
                name="text"
                type="text"
                placeholder="Enter the text"
              />
              <ErrorMessage
                className="change__error"
                component="span"
                name="text"
              />
            </div>
            <button className="btn change__btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}

export default ChangeModal;
