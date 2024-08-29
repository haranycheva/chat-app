import { ErrorMessage, Field, Form, Formik } from "formik";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import "./ChangeModal.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { changeChat, editMessage } from "../../../fetch";
import { schemaValidationChat } from "../../../yup/schemaValidationChat";

const schemaValidationMessage = Yup.object({
  text: Yup.string().trim().required(),
});
function ChangeModal({ thingToInteract, onClose, chatId, type }) {
  const dispatch = useDispatch();

  switch (type) {
    case "message":
      return (
        <ModalWrapper onClose={onClose}>
          <Formik
            initialValues={{ text: thingToInteract.text }}
            onSubmit={(values, { resetForm }) => {
                if (
                values.text === thingToInteract.text
              ) {
                onClose();
                return;
              }
              dispatch(
                editMessage({
                  text: values.text,
                  chatId,
                  message: thingToInteract,
                })
              );
              onClose();
              resetForm({ text: "" });
            }}
            validationSchema={schemaValidationMessage}
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
                    className="error-message"
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
    case "chat":
      return (
        <ModalWrapper onClose={onClose}>
          <Formik
            initialValues={{
              firstName: thingToInteract.firstName,
              secondName: thingToInteract.secondName,
            }}
            onSubmit={(values, { resetForm }) => {
              if (
                values.firstName === thingToInteract.firstName &&
                values.secondName === thingToInteract.secondName
              ) {
                onClose();
                return;
              }
              dispatch(changeChat({ values, chatId: thingToInteract._id }));
              onClose();
              resetForm({ firstName: "", secondName: "" });
            }}
            validationSchema={schemaValidationChat}
          >
            {({ errors }) => (
              <Form className="change__form">
                <h2 className="title">Change The Chat</h2>
                <div className="change__input-wrapp">
                  <Field
                    className={`${errors.firstName ? "error" : ""} input`}
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                  />
                  <ErrorMessage
                    className="error-message"
                    component="span"
                    name="firstName"
                  />
                </div>
                <div className="change__input-wrapp">
                  <Field
                    className={`${errors.secondName ? "error" : ""} input`}
                    name="secondName"
                    type="text"
                    placeholder="Enter second name"
                  />
                  <ErrorMessage
                    className="error-message"
                    component="span"
                    name="secondName"
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
}

export default ChangeModal;
