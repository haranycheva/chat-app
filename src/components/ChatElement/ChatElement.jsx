import "./ChatElement.css";
import UserAvatar from "../../assets/user.png";
import UserIcon from "../UserIcon/UserIcon";
import Message from "../Message/Message";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectAllChats } from "../../redux/selectors";
import { sendMessage } from "../../fetch";

const schemaValidation = Yup.object({
  message: Yup.string().trim().required(),
});

function ChatElement({ setModalName, setModalValues }) {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const chats = useSelector(selectAllChats);
  const chat = chats.filter((chat) => chat._id === chatId)[0];
  useEffect(() => {
    const messageList = document.getElementById("message-list");
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [chatId]);
  return chat ? (
    <div className="chat">
      <div className="chat__inf-wrapp">
        <UserIcon imgPath={UserAvatar} isOnline={true} />
        <h2 className="chat__name">{`${chat.firstName} ${chat.secondName}`}</h2>
      </div>
      <ul className="chat__message-list" id="message-list">
        {chat.message.map((message) => (
          <Message
            setModalValues={setModalValues}
            setModalName={setModalName}
            message={message}
            chatId={chatId}
            key={message._id}
          />
        ))}
      </ul>
      <Formik
        initialValues={{ message: "" }}
        onSubmit={async ({ message }, { resetForm }) => {
          dispatch(
            sendMessage({
              chatId,
              message: { message, date: String(Date.now()) },
            })
          );
          resetForm({ message: "" });
        }}
        validationSchema={schemaValidation}
      >
        {() => (
          <Form>
            <div className="chat__message-input-wrapp">
              <Field
                type="text"
                className="chat__message-input"
                placeholder="Type your message"
                name="message"
              />
              <button type="submit" className="chat__submit-btn" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  ) : (
    <Navigate to="/mychats" />
  );
}

export default ChatElement;
