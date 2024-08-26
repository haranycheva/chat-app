import "./AddNewChatModal.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const schemaValidation = Yup.object({
  name: Yup.string().required("The first name is required"),
  surname: Yup.string().required("The first name is required"),
});

function AddNewChatModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <Formik
        initialValues={{ name: "", surname: "" }}
        onSubmit={async (values) => {
          //   await new Promise((resolve) => setTimeout(resolve, 500));
          //   alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={schemaValidation}
      >
        {({ errors }) => (
          <Form className="add-chat__form">
            <h2 className="add-chat__title title">New Chat</h2>
            <div className="add-chat__input-wrapp">
              <Field
                className={`${errors.name ? "error" : ""} add-chat__input`}
                name="name"
                type="text"
                placeholder="Enter first name"
              />
              <ErrorMessage
                className="add-chat__error"
                component="span"
                name="name"
              />
            </div>
            <div className="add-chat__input-wrapp">
              <Field
                className={`${errors.surname ? "error" : ""} add-chat__input`}
                name="surname"
                type="text"
                placeholder="Enter second name"
              />
              <ErrorMessage
                className="add-chat__error"
                component="span"
                name="surname"
              />
            </div>
            <button className="btn add-chat__btn" type="submit">
              Add a new chat
            </button>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}

export default AddNewChatModal;
