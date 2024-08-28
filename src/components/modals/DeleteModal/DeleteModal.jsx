import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import "./DeleteModal.css";
import { useParams } from "react-router-dom";
import { deleteChat, deleteMessage } from "../../../fetch";

function DeleteModal({ id, onClose, chatId, type }) {
    const dispatch = useDispatch()
  return (
    <ModalWrapper onClose={onClose}>
      <div className="delete__wrapp">
        <h2 className="title">Do you really want to delete?</h2>
        <ul className="delete__btn-list">
          <li>
            <button
              className="btn delete__btn"
              onClick={() => {
                switch (type) {
                  case "message":
                    dispatch(deleteMessage({messageId: id, chatId}))
                    return
                  case "chat":
                    dispatch(deleteChat({chatId: id}))
                }
                onClose()
              }}
              type="button"
            >
              Delete
            </button>
          </li>
          <li>
            <button className="btn delete__btn" type="button" onClick={() => onClose()}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </ModalWrapper>
  );
}

export default DeleteModal;
