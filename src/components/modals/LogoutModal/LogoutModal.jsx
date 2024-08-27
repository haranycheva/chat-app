import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import "./LogoutModal.css";
import { logout } from "../../../fetch";
import { SignOutButton } from "@clerk/clerk-react";


function LogoutModal({ onClose }) {
  const dispatch = useDispatch();

  return (
    <ModalWrapper onClose={onClose}>
      <div className="logout__wrapp">
        <h2 className="title logout__title">
          Are you sure you want to logout?
        </h2>
        <ul className="logout__btn-list">
          <li>
            <SignOutButton redirectUrl="/chat-app/">
              <button
                className="btn logout__btn"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            </SignOutButton>
          </li>
          <li>
            <button onClick={onClose} className="btn logout__btn">
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </ModalWrapper>
  );
}

export default LogoutModal;
