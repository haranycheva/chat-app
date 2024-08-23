import ChatInformation from "../ChatInformation/ChatInformation"
import "./ChatList.css"

function ChatList() {
  return (
    <div className="chats__wrapp">
      <h2 className="chats__title">Chats</h2>
      <ul className="chats__list">
          <ChatInformation/>
          <ChatInformation/>
          <ChatInformation/>
      </ul>
      <button className="chats__add">+</button>
    </div>
  )
}

export default ChatList
