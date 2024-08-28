import UserIcon from "../UserIcon/UserIcon";
import UserAvatar from "../../assets/user.png";
import "./Message.css";
import { dateTransformForMessage } from "../../functions/dateTransformForMessage";
import { openInteractionModal } from "../../functions/openInteractionModal";

function Message({ message, setModalName, setModalValues, chatId}) {
  return message.isMine ? (
    <li
      onContextMenu={(e) => {
        setModalValues({id: message._id, coordinates: {x: e.pageX, y: e.pageY}, chatId})
        openInteractionModal("message", setModalName )
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
