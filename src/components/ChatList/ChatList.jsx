import ChatInformation from "../ChatInformation/ChatInformation"
import "./ChatList.css"

function ChatList({setModalName}) {
  return (
    <div className="chats__wrapp">
      <h2 className="chats__title title">Chats</h2>
      <ul className="chats__list">
          <ChatInformation chat={{id: "1"}}/>
          <ChatInformation chat={{id: '2'}}/>
          <ChatInformation chat={{id: '3'}}/>
      </ul>
      <button className="chats__add btn" onClick={() => setModalName("addChat")}>+</button>
    </div>
  )
}

export default ChatList