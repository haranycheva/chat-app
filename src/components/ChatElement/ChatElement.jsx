import "./ChatElement.css";
import UserAvatar from "../../assets/user.png";
import UserIcon from "../UserIcon/UserIcon";
import Message from "../Message/Message";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const messageObj = {
  text: "How was your meeting?",
  date: "Aug, 17, 2022",
  isFromOtherPerson: true,
};

const messageObj2 = {
  text: "Hello world!",
  date: "Aug, 17, 2022",
  isFromOtherPerson: false,
};

function ChatElement() {
  const {chatId} = useParams()
  useEffect(() => {
    const messageLIst = document.getElementById("message-list");
    messageLIst.scrollTop = messageLIst.scrollHeight;
  }, [chatId]);
  return (
    <div className="chat">
      <div className="chat__inf-wrapp">
        <UserIcon imgPath={UserAvatar} isOnline={false} />
        <h2 className="chat__name">Alice Freeman</h2>
      </div>
      <ul className="chat__message-list" id="message-list">
        <Message message={messageObj2} />
        <Message message={messageObj} />
        <Message message={messageObj2} />
        <Message message={messageObj} />
        <Message message={messageObj2} />
        <Message message={messageObj} />
        <Message message={messageObj2} />
        <Message message={messageObj} />
      </ul>
      <div className="chat__message-input-wrapp">
        <input
          type="text"
          className="chat__message-input"
          placeholder="Type your message"
        />
        <button className="chat__submit-btn"></button>
      </div>
    </div>
  );
}

export default ChatElement;
