import "./ChatInformation.css";
import UserIcon from "../UserIcon/UserIcon";
import UserAvatar from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import DotSvg from "../../assets/dots.svg";
import { dateTransformForChat } from "../../functions/dateTransformForChat";
import { openInteractionModal } from "../../functions/openInteractionModal";

function ChatInformation({ chat, setModalValues, setModalName }) {
  return (
    <li
      onContextMenu={(e) => {
        setModalValues({
          id: chat._id,
          coordinates: { x: e.pageX, y: e.pageY },
        });
        openInteractionModal("chat", setModalName);
      }}
    >
      <NavLink className="chat-inf__link" to={chat._id}>
        <div className="chat-inf__wrapp">
          <UserIcon imgPath={UserAvatar} isOnline={true} />
          <div className="chat-inf__details">
            <div>
              <h3 className="chat-inf__name">{`${chat.firstName} ${chat.secondName}`}</h3>
              <p className="chat-inf__last-message">
                {chat.message.length
                  ? chat.message[chat.message.length - 1].text.length > 25
                    ? chat.message[chat.message.length - 1].text.slice(0, 25) +
                      "..."
                    : chat.message[chat.message.length - 1].text
                  : ""}
              </p>
            </div>
            <div>
              <p className="chat-inf__date">
                {chat.message.length
                  ? dateTransformForChat(
                      chat.message[chat.message.length - 1].date
                    )
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default ChatInformation;
