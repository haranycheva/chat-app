import "./PleaseSelectChat.css";
import Cat from "../../assets/cat.png";

function PleaseSelectChat() {
  return (
    <div className="select-chat__wrapp">
      <h2 className="select-chat__title">Select a chat to start messaging</h2>
      <img src={Cat} alt="cutie" width="240px" height="260px" />
    </div>
  );
}

export default PleaseSelectChat;
