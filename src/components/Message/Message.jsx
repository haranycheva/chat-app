import UserIcon from "../UserIcon/UserIcon";
import UserAvatar from "../../assets/user.png";
import "./Message.css";
import { dateTransformForMessage } from "../../functions/dateTransformForMessage";

function Message({ message }) {
  return message.isMine ? (
    <li
      onContextMenu={(e) => {
        e.preventDefault()
        console.log(e.type);
      }}
      className="message my-message"
    >
      <div className="message__inf-wrapp">
        <p className="message__text">{message.text}</p>
        <p>{dateTransformForMessage(message.date)}</p>
      </div>
    </li>
  ) : (
    <li className="message">
      <UserIcon imgPath={UserAvatar} isOnline={false} />
      <div className="message__inf-wrapp">
        <p className="message__text">{message.text}</p>
        <p>{dateTransformForMessage(message.date)}</p>
      </div>
    </li>
  );
}

export default Message;
