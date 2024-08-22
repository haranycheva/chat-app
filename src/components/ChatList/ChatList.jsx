import ChatInformation from "../ChatInformation/ChatInformation"
import "./ChatList.css"

function ChatList() {
  return (
    <div>
      <h2 className="chats__title">Chats</h2>
      <ul>
          <ChatInformation/>
          <ChatInformation/>
          <ChatInformation/>
      </ul>
    </div>
  )
}

export default ChatList
