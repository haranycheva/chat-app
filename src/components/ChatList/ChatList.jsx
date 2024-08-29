import { useSelector } from "react-redux";
import ChatInformation from "../ChatInformation/ChatInformation";
import "./ChatList.css";
import { selectAllChats } from "../../redux/selectors";
import { useSearchParams } from "react-router-dom";

function ChatList({ setModalName, setModalValues }) {
  const chats = useSelector(selectAllChats);
  const [params] = useSearchParams();
  const chatSearch = params.get(`chatSearch`) ?? "";
  const filteredChats = chats.filter(
    ({ firstName, secondName }) =>
      firstName.toLowerCase().includes(chatSearch.toLowerCase()) ||
      secondName.toLowerCase().includes(chatSearch.toLowerCase())
  );
  return (
    <div className="chats__wrapp">
      <h2 className="chats__title title">Chats</h2>
      <ul className="chats__list">
        {filteredChats.map((chat) => (
          <ChatInformation
            setModalName={setModalName}
            setModalValues={setModalValues}
            key={chat._id}
            chat={chat}
          />
        ))}
      </ul>
      <button
        type="button"
        className="chats__add btn"
        onClick={() => setModalName("addChat")}
      >
        +
      </button>
    </div>
  );
}

export default ChatList;
