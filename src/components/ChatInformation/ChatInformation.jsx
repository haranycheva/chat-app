import "./ChatInformation.css";
import UserIcon from "../UserIcon/UserIcon";
import UserAvatar from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import DotSvg from "../../assets/dots.svg"

function ChatInformation({ chat }) {
  return (
    <li >
      <NavLink className="chat-inf__link" to={chat._id}>
        <div className="chat-inf__wrapp">
          <UserIcon imgPath={UserAvatar} isOnline={true} />
          <div className="chat-inf__details">
            <div>
              <h3 className="chat-inf__name">{`${chat.firstName} ${chat.secondName}`}</h3>
              <p className="chat-inf__last-message">How was your meeting?</p>
            </div>
            <div>
              <p className="chat-inf__date">Aug, 17, 2022</p>
              {/* <button className="chat-inf_btn">
                <svg  height="30px" width="30px">
                  <use href={`${DotSvg}#dots`}/>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default ChatInformation;
