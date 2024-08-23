import "./ChatElement.css"
import UserAvatar from "../../assets/user.png";
import UserIcon from "../UserIcon/UserIcon";
import Message from "../Message/Message";

const messageObj = {
  text: "How was your meeting?",
  date: "Aug, 17, 2022",
  isFromOtherPerson: true,
}

const messageObj2 = {
  text: "Hello world!",
  date: "Aug, 17, 2022",
  isFromOtherPerson: false,
}

function ChatElement() {
  return (
    <div className="chat">
      <div className="chat__inf-wrapp">
        <UserIcon imgPath={UserAvatar} isOnline={false}/>
        <h2 className="chat__name">Alice Freeman</h2>
      </div>
      <ul className="chat__message-list">
        <Message message={messageObj2}/>
        <Message message={messageObj}/>
      </ul>
      <div className="chat__message-input-wrapp">
        <input type="text" className="chat__message-input" placeholder="Type your message"/>
        <button className="chat__submit-btn"></button>
      </div>
    </div>
  )
}

export default ChatElement
