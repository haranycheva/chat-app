import AddNewChatModal from "./AddNewChatModal/AddNewChatModal";
import InteractionModal from "./IneractionModal/InteractionModal";
import LogoutModal from "./LogoutModal/LogoutModal";
import "./ModalSelector.css";

function ModalSelector({ modalName, closeModal, modalValues }) {
  switch (modalName) {
    case "addChat":
      return <AddNewChatModal onClose={closeModal} />;
    case "logout":
      return <LogoutModal onClose={closeModal} />;
    case "message":
        const {id, coordinates} = modalValues;
        return <InteractionModal id={id} coordinates={coordinates} onClose={closeModal} />;
    default:
      return <></>;
  }
}

export default ModalSelector;
