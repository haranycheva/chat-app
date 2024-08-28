import "./AddNewChatModal.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addChat } from "../../../fetch";

const schemaValidation = Yup.object({
  firstName: Yup.string().matches(/^\S*$/, 'No spaces are allowed').required("The first name is required"),
  secondName: Yup.string().matches(/^\S*$/, 'No spaces are allowed').required("The first name is required"),
});

function AddNewChatModal({ onClose }) {
  const dispatch = useDispatch();
  return (
    <ModalWrapper onClose={onClose}>
      <Formik
        initialValues={{ firstName: "", secondName: "" }}
        onSubmit={async (values, { resetForm }) => {
          dispatch(addChat(values));
          onClose();
          resetForm({ firstName: "", secondName: "" });
        }}
        validationSchema={schemaValidation}
      >
        {({ errors }) => (
          <Form className="add-chat__form">
            <h2 className="add-chat__title title">New Chat</h2>
            <div className="add-chat__input-wrapp">
              <Field
                className={`${errors.firstName ? "error" : ""} add-chat__input`}
                name="firstName"
                type="text"
                placeholder="Enter first name"
              />
              <ErrorMessage
                className="add-chat__error"
                component="span"
                name="firstName"
              />
            </div>
            <div className="add-chat__input-wrapp">
              <Field
                className={`${
                  errors.secondName ? "error" : ""
                } add-chat__input`}
                name="secondName"
                type="text"
                placeholder="Enter second name"
              />
              <ErrorMessage
                className="add-chat__error"
                component="span"
                name="secondName"
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
