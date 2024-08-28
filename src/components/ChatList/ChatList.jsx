import { useSelector } from "react-redux"
import ChatInformation from "../ChatInformation/ChatInformation"
import "./ChatList.css"
import { selectAllChats } from "../../redux/selectors"

function ChatList({setModalName}) {
  const chats = useSelector(selectAllChats)
  return (
    <div className="chats__wrapp">
      <h2 className="chats__title title">Chats</h2>
      <ul className="chats__list">
          {chats.map((chat) => <ChatInformation key={chat._id} chat={chat}/>)}
      </ul>
      <button type="button" className="chats__add btn" onClick={() => setModalName("addChat")}>+</button>
    </div>
  )
}

export default ChatList