import AddNewChatModal from "./AddNewChatModal/AddNewChatModal";
import "./ModalSelector.css"

function ModalSelector({modalName, closeModal}) {
  switch (modalName) {
    case "addChat":
        return <AddNewChatModal onClose={closeModal}/>
    default:
        return <></>
  }
}

export default ModalSelector
