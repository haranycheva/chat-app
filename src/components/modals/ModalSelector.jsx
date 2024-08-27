import AddNewChatModal from "./AddNewChatModal/AddNewChatModal";
import LogoutModal from "./LogoutModal/LogoutModal";
import "./ModalSelector.css";

function ModalSelector({ modalName, closeModal }) {
  switch (modalName) {
    case "addChat":
      return <AddNewChatModal onClose={closeModal} />;
    case "logout":
      return <LogoutModal onClose={closeModal} />;
    default:
      return <></>;
  }
}

export default ModalSelector;
