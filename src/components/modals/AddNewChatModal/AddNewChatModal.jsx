import { Field, Form, Formik } from "formik";
import "./AddNewChatModal.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

function AddNewChatModal({ onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <Formik
        initialValues={{ name: "", surname: "" }}
        onSubmit={async (values) => {
          //   await new Promise((resolve) => setTimeout(resolve, 500));
          //   alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="add-chat__form">
          <h2 className="add-chat__title title">New Chat</h2>
          <Field
            className="add-chat__input"
            name="name"
            type="text"
            placeholder="Enter first name"
          />
          <Field
            className="add-chat__input"
            name="surname"
            type="text"
            placeholder="Enter second name"
          />
          <button className="btn add-chat__btn" type="submit">
            Add a new chat
          </button>
        </Form>
      </Formik>
    </ModalWrapper>
  );
}

export default AddNewChatModal;
