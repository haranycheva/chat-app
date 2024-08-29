import AddNewChatModal from "./AddNewChatModal/AddNewChatModal";
import ChangeModal from "./ChangeModal/ChangeModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import InteractionModal from "./IneractionModal/InteractionModal";
import LogoutModal from "./LogoutModal/LogoutModal";
import "./ModalSelector.css";

function ModalSelector({ modalName, closeModal, modalValues, setModalName }) {
  switch (modalName) {
    case "addChat":
      return <AddNewChatModal onClose={closeModal} />;
    case "logout":
      return <LogoutModal onClose={closeModal} />;
    case "message":
      return (
        <InteractionModal
          type="message"
          coordinates={modalValues.coordinates}
          onClose={closeModal}
          setModalName={setModalName}
        />
      );
    case "chat":
      return (
        <InteractionModal
          type="chat"
          coordinates={modalValues.coordinates}
          onClose={closeModal}
          setModalName={setModalName}
        />
      );
    case "delete-message":
      return (
        <DeleteModal
          chatId={modalValues.chatId}
          id={modalValues.thingToInteract._id}
          onClose={closeModal}
          type={"message"}
        />
      );
    case "delete-chat":
      return (
        <DeleteModal
          id={modalValues.thingToInteract._id}
          onClose={closeModal}
          type={"chat"}
        />
      );
    case "change-message":
      return (
        <ChangeModal
          onClose={closeModal}
          type={"message"}
          chatId={modalValues.chatId}
          thingToInteract={modalValues.thingToInteract}
        />
      );
    case "change-chat":
      <ChangeModal
      onClose={closeModal}
      type={"chat"}
      thingToInteract={modalValues.thingToInteract}
    />
    default:
      return <></>;
  }
}

export default ModalSelector;
